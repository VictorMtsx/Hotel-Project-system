import express from "express";
import "dotenv/config";
import cors from "cors";
import jwt from "jsonwebtoken";
import { createUser } from "../functions/create-user.ts";
import { checkExistingUser } from "../functions/checkExistingUser.ts";
import { sendEmail } from "../functions/sendEmail.ts";
import { z } from "zod";
import { db } from "./index.ts";
import { users } from "../db/schema.ts";
import { eq } from "drizzle-orm";
import { adicionarUserCadastrado } from "../functions/emailValidation/functions/adicionarUserCadastrado.ts";
import { env } from "../env.ts";
import getUsersCadastrados from "../functions/get-users-cadastrados.ts";

const app: express.Express = express();

app.use(cors());
app.use(express.json());

app.get("/", (res: express.Response) => {
	res.send("server is running");
});

app.get(
	"/autorization",

	async (req: express.Request, res: express.Response) => {
		const { token } = req.query;
		if (!token) {
			return res.status(400).send("Token inválido ou ausente.");
		}

		try {
			const decoded = jwt.verify(
				token as string,
				env.SECRET_TOKEN as string,
			) as { email: string };

			if (!decoded.email) {
				return res.status(400).send("Token inválido.");
			}

			const user = await db
				.select()
				.from(users)
				.where(eq(users.email, decoded.email));

			if (user.length > 0) {
				user[0].auth = true;
				await db
					.update(users)
					.set({ auth: true })
					.where(eq(users.email, decoded.email));
				adicionarUserCadastrado({ email: decoded.email });
				return res.send("email verificado com sucesso.");
			}
		} catch (error) {
			console.log(error);
			return res.status(401).send("Token inválido ou expirado.");
		}
	},
);

function verifyJwt(
	req: express.Request,
	res: express.Response,
	next: express.NextFunction,
): Promise<void> {
	const token = req.headers["x-access-token"] as string; // Pega o token do cabeçalho da requisição

	if (!token) {
		res.status(401).send("Token não fornecido");
		return Promise.resolve();
	}

	jwt.verify(token, env.SECRET_TOKEN, (err, decoded) => {
		if (err) {
			console.log(err);
			res.status(401).send("Token inválido ou expirado");
			return Promise.resolve();
		}

		req.body.id = (decoded as { id: string }).id; // Atribui o id decodificado ao corpo da requisição
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

	const token = jwt.sign({ email: req.body.email }, env.SECRET_TOKEN, {
		expiresIn: 3600,
	});

	const body = createUserSchema.parse(req.body);
	console.log(body);

	try {
		await createUser({
			name: body.name,
			nickname: body.nickname,
			email: body.email,
			password: body.password,
			verificationToken: token,
		});
		await sendEmail(
			body.email,
			"email de verificação",
			"agora precisamos que verifique o seu email para ativar sua conta. para isso, clique no link abaixo:",
			`http://localhost:5173/VerifyEmail?token=${token}`,
		);

		console.log("user criado com sucesso");
		res.status(201).send("user criado com sucesso");
		return Promise.resolve();
	} catch (error) {
		console.error("Erro ao cadastrar o usuário:", error); // Loga o erro real
		res.status(500).json({ error: "Erro interno no servidor" });
	}
});

app.post("/log-in", async (req: express.Request, res: express.Response) => {
	const checarLogInSchema = z.object({
		email: z.string().email(),
		password: z.string().min(8).max(12).nonempty(),
	});

	try {
		const { email, password } = checarLogInSchema.parse(req.body);

		const isUserValid = await checkExistingUser({ email, password });

		if (isUserValid?.found === true) {
			const token = jwt.sign(
				{ id: isUserValid.id },
				process.env.SECRET_TOKEN as string,
				{ expiresIn: 300 },
			);
			res.json({ auth: true, token });
			return;
		}
	} catch (e) {
		// console.log(e);s
		res.status(401).end();
	}
});

app.post(
	"/home-page",
	verifyJwt,
	(req: express.Request, res: express.Response) => {
		res.set({
			"Access-Control-Allow-Origin": "*",
		});
	},
);

app.get("/cadastrados", async (req: express.Request, res: express.Response) => {
	try {
		const users = await getUsersCadastrados(); // Espera os dados corretamente
		return res.json(users); // Retorna os dados para o cliente
	} catch (error) {
		console.error("Erro ao buscar usuários cadastrados:", error);
		return res.status(500).json({ error: "Erro interno do servidor" });
	}
});

app.listen(3000, () => {
	console.log("server is running on port 3333");
});
