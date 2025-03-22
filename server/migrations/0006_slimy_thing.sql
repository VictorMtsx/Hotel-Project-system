ALTER TABLE "cadastrados" ALTER COLUMN "auth" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "cadastrados" ALTER COLUMN "auth" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "auth" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "auth" DROP NOT NULL;