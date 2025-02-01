import { randomBytes } from "node:crypto";

export function generateVerificationToken(): string {
	return randomBytes(32).toString("hex"); // Gera uma string aleatória de 64 caracteres
}
