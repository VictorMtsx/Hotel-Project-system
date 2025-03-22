ALTER TABLE "users" ADD COLUMN "verificationToken" text;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "isVerified" boolean DEFAULT false;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_verificationToken_unique" UNIQUE("verificationToken");