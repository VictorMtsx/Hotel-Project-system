ALTER TABLE "users" DROP CONSTRAINT "users_verificationToken_unique";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "verificationToken";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "isVerified";