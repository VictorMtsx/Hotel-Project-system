import express from "express";
import "dotenv/config";
import cors from "cors";
import { createUser } from "../functions/create-user.ts";
import { generateVerificationToken } from "../functions/emailValidation/functions/generateVerificationToken.ts";
import { checkExistingUser } from "../functions/checkExistingUser.ts";
import { sendEmail } from "../functions/sendEmail.ts";
import { z } from "zod";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("server is running");
});

app.post("/sign-up", async (req, res) => {
	const createUserSchema = z.object({
		name: z.string(),
		nickname: z.string(),
		email: z.string().email(),
		password: z.string().min(8).max(12),
	});

	const body = createUserSchema.parse(req.body);

	const verificationToken = generateVerificationToken();

	await createUser({
		name: body.name,
		nickname: body.nickname,
		email: body.email,
		password: body.password,
		verificationToken,
		isVerified: false,
	});

	try {
		// const verificationLink = `http://seusite.com/verify-email?token=${verificationToken}`;
		// const emailText = `Clique no link para verificar seu e-mail: ${verificationLink}`;

		await sendEmail(body.email, "verifique seu e-mail", "verifique seu e-mail");

		res.status(201).send("user criado com sucesso");
		console.log("user criado com sucesso");
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

	if (isUserValid.found) {
		res.status(200).send("user encontrado");
		// console.log("user logado com sucesso");
	} else {
		res.status(401).send("user ou senha inválidos");
	}
});

app.listen(3000, () => {
	console.log("server is running on port 3000");
});
