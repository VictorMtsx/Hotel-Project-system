import { client, db } from "./index.ts";
import { users } from "../db/schema.ts";

async function seed() {
	await db.delete(users);

	await db.insert(users).values({
		fullName: "John Doe",
		email: "LxW2l@example.com",
		nickname: "John",
		password: "123456",
	});
}

seed().finally(() => {
	client.end();
});
