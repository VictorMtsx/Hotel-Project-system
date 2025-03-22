import { db } from "../http/index.ts";
import { cadastrados } from "../db/schema.ts";
import { eq } from "drizzle-orm";

interface User {
	email: string;
	password: string;
}

export async function checkExistingUser({ email, password }: User) {
	try {
		const result = await db
			.select()
			.from(cadastrados)
			.where(eq(cadastrados.email, email));

		if (result) {
			return { found: true, id: result[0].id };
		}
	} catch (error) {
		console.error("Erro ao verificar usuário:", error);
		return { found: false, message: "Erro ao verificar usuário" };
	}
}
