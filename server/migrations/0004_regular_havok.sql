CREATE TABLE "cadastrados" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" varchar(50) NOT NULL,
	"nickname" text NOT NULL,
	"password" varchar(20) NOT NULL,
	"auth" boolean NOT NULL,
	"verificationToken" text,
	CONSTRAINT "cadastrados_email_unique" UNIQUE("email"),
	CONSTRAINT "cadastrados_verificationToken_unique" UNIQUE("verificationToken")
);
--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "auth" boolean NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "verificationToken" text;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_verificationToken_unique" UNIQUE("verificationToken");