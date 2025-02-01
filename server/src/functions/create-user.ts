import { db } from "../http/index.ts";
import { users } from "../db/schema.ts";

interface User {
	name: string;
	nickname: string;
	email: string;
	password: string;
	// verificationToken?: string;
	// isVerified?: boolean;
}

export async function createUser({
	name,
	nickname,
	email,
	password,
	// verificationToken,
	// isVerified = false,
}: User) {
	const result = await db
		.insert(users)
		.values({
			fullName: name,
			email: email,
			nickname: nickname,
			password: password,
			// verificationToken,
			// isVerified,
		})
		.returning();

	const user = result[0];

	return {
		user,
	};
}
