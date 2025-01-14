import express from "express";
import { createUser } from "../functions/create-user.ts";
import { z } from "zod";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("server is running");
});

app.get("/sign-up", (req, res) => {});

app.post("/sign-up", async (req, res) => {
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
});

app.listen(3000, () => {
	console.log("server is running on port 3000");
});
