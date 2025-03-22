import { pgTable, text, varchar } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import { boolean } from "drizzle-orm/pg-core";

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
	auth: boolean("auth").$default(() => false),
	verificationToken: text("verificationToken").unique(),
});

export const cadastrados = pgTable("cadastrados", {
	id: text("id")
		.primaryKey()
		.$default(() => createId()),
	fullName: text("name").notNull(),
	email: varchar("email", { length: 50 }).notNull().unique(),
	nickname: text("nickname")
		.notNull()
		.$default(() => "Sem apelido"),
	password: varchar("password", { length: 20 }).notNull(),
	auth: boolean("auth").$default(() => true),
	verificationToken: text("verificationToken").unique(),
});
