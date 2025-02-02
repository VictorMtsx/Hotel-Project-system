import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const users = pgTable("users", {
	id: text("id")
		.primaryKey()
		.$default(() => createId()),
	fullName: text("name").notNull(),
	email: varchar("email", { length: 50 }).notNull().unique(),
	nickname: text("nickname")
		.notNull()
		.$default(() => "Sem apelido"),
	password: varchar("password", { length: 20 }).notNull(),
});
