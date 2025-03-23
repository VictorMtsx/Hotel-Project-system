import { db } from "../http/index.ts";
import { cadastrados } from "../db/schema.ts";

export default async function getUsersCadastrados() {
	type User = {
		id: string;
		fullName: string;
		email: string;
		nickname: string;
	};

	const users: User[] = await db.select().from(cadastrados); // Agora users é um array de objetos

	return users.map((user) => ({
		id: user.id,
		fullName: user.fullName,
		email: user.email,
		nickname: user.nickname,
	}));
}
