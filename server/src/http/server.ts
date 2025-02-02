import express from "express";
import "dotenv/config";
import cors from "cors";
import { createUser } from "../functions/create-user.ts";
import { checkExistingUser } from "../functions/checkExistingUser.ts";
import { sendEmail } from "../functions/sendEmail.ts";
import { z } from "zod";
import jwt from "jsonwebtoken";

const app: express.Express = express();

app.use(cors());
app.use(express.json());

app.get("/", (res: express.Response) => {
	res.send("server is running");
});

app.get("/autorization", verifyJwt, (res: express.Response) => {
	console.log("voce foi autorizado");
});

function verifyJwt(
	req: express.Request,
	res: express.Response,
	next: express.NextFunction,
) {
	const token = req.headers["x-access-token"] as string;
	jwt.verify(token, process.env.SECRET_TOKEN as string, (err, decoded) => {
		if (err) {
			console.log(err);
			return res.status(401).send("Token inválido");
		}

		req.body.id = (decoded as { id: string }).id;

		next();
	});
}

app.post("/sign-up", async (req: express.Request, res: express.Response) => {
	const createUserSchema = z.object({
		name: z.string(),
		nickname: z.string(),
		email: z.string().email(),
		password: z.string().min(8).max(12),
	});

	const body = createUserSchema.parse(req.body);

	await createUser({
		name: body.name,
		nickname: body.nickname,
		email: body.email,
		password: body.password,
	});

	try {
		await sendEmail(
			body.email,
			"conta criada com sucesso",
			"muito obrigado por se cadastrar em nosso site! Agora você faz parte da nossa comunidade de clientes. Bem-vindo!",
		);

		console.log("user criado com sucesso");
		res.status(201).send("user criado com sucesso");
		return;
	} catch (error) {
		console.log(new Error("error ao cadastrar o user"));
	}
});

app.post("/log-in", async (req, res) => {
	const checarLogInSchema = z.object({
		email: z.string().email(),
		password: z.string().min(8).max(12).nonempty(),
	});
	const { email, password } = checarLogInSchema.parse(req.body);
	const isUserValid = await checkExistingUser({ email, password });

	if (isUserValid?.found) {
		const token = jwt.sign(
			{ id: isUserValid.id },
			process.env.SECRET_TOKEN as string,
			{ expiresIn: 300 },
		);
		return res.json({ auth: true, token });
	}
	res.status(401).end();
});

app.listen(3000, () => {
	console.log("server is running on port 3000");
});
