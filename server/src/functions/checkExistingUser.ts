import { db } from "../http/index.ts";
import { users } from "../db/schema.ts";
import { eq } from "drizzle-orm";

interface User {
	email: string;
	password: string;
}

export async function checkExistingUser({ email, password }: User) {
	try {
		const result = await db.select().from(users).where(eq(users.email, email));
		if (result.length > 0) {
			const storedUser = result[0];
			const isPasswordMatch = storedUser.password === password;

			if (isPasswordMatch) {
				const storedUserId = storedUser.id;

				return { found: true, id: storedUserId };
			}
		}
		return { found: false };
	} catch (error) {
		console.error("Erro ao verificar usuário:", error);
		return { found: false, message: "Erro ao verificar usuário" };
	}
}
