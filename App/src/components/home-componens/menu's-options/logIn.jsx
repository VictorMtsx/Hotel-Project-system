import { useForm } from "react-hook-form";
// Importa a função z da biblioteca Zod para criar o esquema de validação
import { z } from "zod";
// Importa o zodResolver para integrar a validação do Zod com o hook useForm
import { zodResolver } from "@hookform/resolvers/zod";

const logInSchema = z.object({
	email: z
		.string()
		.email({
			message: "O email é inválido",
		})
		.nonempty({
			message: "O email é obrigatório",
		}),
	password: z
		.string()
		.min(8, { message: "A senha deve ter no mínimo 6 caracteres" })
		.max(12, { message: "A senha deve ter no máximo 12 caracteres" })
		.nonempty({
			message: "Digite sua senha",
		}),
});

export function LogIn() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: zodResolver(logInSchema),
	});

	async function hundlerSubmitFormLogIn(data) {
		const response = await fetch("http://localhost:3000/log-in", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (response.ok) {
			console.log("usuário encontrado com sucesso!");
		} else {
			console.log("Usuário ou senha inválidos");
		}

		reset();
	}

	return (
		<div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-slate-300 to-slate-500">
			<form
				onSubmit={handleSubmit(hundlerSubmitFormLogIn)}
				action=""
				method="post"
				className="shadow w-[500px] h-auto flex flex-col py-4 gap-4 border-[1px] bg-zinc-100 border-zinc-300 rounded-3xl items-center justify-around "
			>
				<h1 className="text-3xl font-bold text-blue-400">
					Bem vindo de volta!
				</h1>
				<div className="flex flex-col gap-6">
					<label htmlFor="" className="font-semibold text-lg text-zinc-600">
						Nome de Usuário ou e-mail
					</label>
					<input
						{...register("email")}
						type="text"
						className="px-2 h-8 border border-zinc-300 focus:outline-blue-300  hover:border hover:border-blue-200 rounded-lg "
						placeholder="Ex: 9CfZo@example.com "
					/>
					{errors.email && (
						<span className="text-red-500 text-sm">{errors.email.message}</span>
					)}
					<label htmlFor="" className="font-semibold text-lg text-zinc-600">
						Senha
					</label>
					<input
						{...register("password")}
						type="password"
						className="px-2 h-8 border border-zinc-300 focus:outline-blue-300 hover:border hover:border-blue-200 rounded-lg "
						placeholder="Ex: ******* "
					/>
					{errors.password && (
						<span className="text-red-500 text-sm">
							{errors.password.message}
						</span>
					)}
				</div>

				<button
					type="submit"
					className="w-32 h-10 bg-blue-500  text-white rounded-lg hover:bg-blue-600 "
				>
					Entrar
				</button>
				<p className="flex flex-row mt-4 gap-2">
					Não possui uma conta?
					<a href="/SignUp" className="text-blue-500 hover:underline ">
						Clique aqui
					</a>
				</p>
			</form>
		</div>
	);
}
