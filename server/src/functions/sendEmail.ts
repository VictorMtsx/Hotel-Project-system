import { transporter } from "../http/nodemailer.ts";

export function sendEmail(to: string, subject: string, text: string) {
	type mailOptions = {
		from: string | undefined;
		to: string;
		subject: string;
		text: string;
	};

	const mailOptions: mailOptions = {
		from: process.env.USER_EMAIL, // E-mail do remetente
		to, // E-mail do destinatário
		subject,
		text,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(mailOptions);
			return console.log("Erro ao enviar e-mail: ", error);
		}
		console.log(`email enviado: ${info.response}`);
	});
}
