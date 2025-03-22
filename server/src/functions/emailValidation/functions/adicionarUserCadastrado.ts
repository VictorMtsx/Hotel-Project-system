import { db } from "../../../http/index.ts";
import { users } from "../../../db/schema.ts";
import { cadastrados } from "../../../db/schema.ts";
import { eq } from "drizzle-orm";

interface user {
	email: string;
}

export async function adicionarUserCadastrado({ email }: user) {
	const authorizedUser = await db
		.select()
		.from(users)
		.where(eq(users.email, email));

	const user = authorizedUser[0];

	if (user.auth === true) {
		await db.insert(cadastrados).values(user);
		await db.delete(users).where(eq(users.email, email));
		return { message: "usuario cadastrado com sucesso" };
	}

	return { message: "usuario nao autorizado" };
}
