// Importa o hook useForm da biblioteca react-hook-form para gerenciar o estado e a validação do formulário
import { useForm } from "react-hook-form";
// Importa a função z da biblioteca Zod para criar o esquema de validação
import { z } from "zod";
// Importa o zodResolver para integrar a validação do Zod com o hook useForm
import { zodResolver } from "@hookform/resolvers/zod";
// Importa o React, que é necessário para criar componentes React
import React from "react";

// Definição do schema de validação com Zod
const signUpSchema = z
	.object({
		// Cria um objeto de validação com Zod para definir as regras do formulário
		name: z.string().nonempty({
			// Define um campo "name" do tipo string e garante que não esteja vazio
			message: "O nome é obrigatório", // Define a mensagem de erro caso o campo "name" esteja vazio
		}),

		email: z.string().nonempty({ message: "O email é obrigatório" }).email({
			// Define o campo "email", garantindo que seja uma string não vazia e com formato de e-mail válido
			message: "O email é inválido", // Mensagem de erro caso o campo "email" esteja vazio ou o formato seja inválido
		}),

		nickname: z
			.string() // Define o campo "nickname" como uma string
			.nonempty({
				// Garante que o campo "nickname" não esteja vazio
				message: "Caso não tenha preferência de apelido, digite seu nome", // Mensagem de erro caso o campo "nickname" esteja vazio
			})
			.min(3, { message: "O nickname deve ter no mínimo 3 caracteres" }) // Garante que o "nickname" tenha no mínimo 3 caracteres
			.max(12, { message: "O nickname deve ter no máximo 12 caracteres" }), // Garante que o "nickname" tenha no máximo 12 caracteres

		password: z
			.string() // Define o campo "password" como uma string
			.nonempty({ message: "A senha é obrigatória" }) // Garante que o campo "password" não esteja vazio
			.min(8, { message: "A senha deve ter no mínimo 6 caracteres" }) // Garante que a senha tenha no mínimo 6 caracteres
			.max(12, { message: "A senha deve ter no máximo 12 caracteres" }), // Garante que a senha tenha no máximo 12 caracteres

		confirmPassword: z
			.string() // Define o campo "confirmPassword" como uma string
			.nonempty({ message: "A confirmação de senha é obrigatória" }), // Garante que o campo "confirmPassword" não esteja vazio
	})
	.refine((data) => data.password === data.confirmPassword, {
		// Valida se a senha e a confirmação da senha coincidem
		message: "As senhas não coincidem", // Mensagem de erro caso as senhas não coincidam
		path: ["confirmPassword"], // Especifica que o erro deve ser associado ao campo "confirmPassword"
	});

// Função do componente SignUp (Cadastro)
export function SignUp() {
	// Usa o hook useForm para gerenciar o estado do formulário e associar a validação
	const {
		register, // Função para registrar os campos do formulário
		handleSubmit, // Função para gerenciar o envio do formulário
		formState: { errors }, // Estado do formulário, incluindo erros de validação
		reset,
	} = useForm({
		resolver: zodResolver(signUpSchema), // Integra o esquema de validação do Zod com o useForm
	});

	// Função de submissão do formulário
	async function hundlerSubmitForm(data) {
		const response = await fetch("http://localhost:3000/sign-up", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (response.ok) {
			console.log("Cadastro realizado com sucesso!");
			console.log(data);
		}

		reset();
	}

	return (
		<div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-slate-300 to-slate-500">
			{/* Formulário de Cadastro */}
			<form
				onSubmit={handleSubmit(hundlerSubmitForm)} // Chama a função de submissão ao enviar o formulário
				action="" // Define a ação do formulário (não é necessária para este caso)
				method="post" // Define o método de envio do formulário como POST
				className="shadow SignUp w-[500px] h-auto flex flex-col gap-4 border-[1px] bg-zinc-100 border-zinc-300 rounded-3xl items-center justify-around "
			>
				<h1 className="text-3xl font-bold text-blue-400">Seja bem vindo!</h1>
				<div className="flex flex-col gap-4">
					{/* Campo para Nome */}
					<label htmlFor="" className="font-semibold text-lg text-zinc-600">
						Digite seu nome completo
					</label>
					<input
						{...register("name")} // Registra o campo "name" no formulário
						type="text" // Define o tipo do campo como texto
						className="px-2 h-8 border border-zinc-300 focus:outline-blue-300 hover:border hover:border-blue-200 rounded-lg"
						placeholder="Ex: João da Silva Carvalho"
					/>
					{/* Exibe erro caso o campo "name" tenha um erro de validação */}
					{errors.name && (
						<p className="text-red-500 text-sm">{errors.name.message}</p>
					)}

					{/* Campo para E-mail */}
					<label htmlFor="" className="font-semibold text-lg text-zinc-600">
						Email
					</label>
					<input
						{...register("email")} // Registra o campo "email" no formulário
						type="email" // Define o tipo do campo como email
						className="px-2 h-8 border border-zinc-300 focus:outline-blue-300 hover:border hover:border-blue-200 rounded-lg"
						placeholder="Ex: example@example.com"
					/>
					{/* Exibe erro caso o campo "email" tenha um erro de validação */}
					{errors.email && (
						<p className="text-red-500 text-sm">{errors.email.message}</p>
					)}

					{/* Campo para Nickname */}
					<label htmlFor="" className="font-semibold text-lg text-zinc-600">
						Como gosta de ser chamado?
					</label>
					<input
						{...register("nickname")} // Registra o campo "nickname" no formulário
						type="text" // Define o tipo do campo como texto
						className="px-2 h-8 border border-zinc-300 focus:outline-blue-300 hover:border hover:border-blue-200 rounded-lg"
						placeholder="Ex: Dr. João"
					/>
					{/* Exibe erro caso o campo "nickname" tenha um erro de validação */}
					{errors.nickname && (
						<p className="text-red-500 text-sm">{errors.nickname.message}</p>
					)}

					{/* Campo para Senha */}
					<label htmlFor="" className="font-semibold text-lg text-zinc-600">
						Digite sua senha
					</label>
					<input
						{...register("password")} // Registra o campo "password" no formulário
						type="password" // Define o tipo do campo como senha
						className="px-2 h-8 border border-zinc-300 focus:outline-blue-300 hover:border hover:border-blue-200 rounded-lg"
						placeholder="Ex: *******"
					/>
					{/* Exibe erro caso o campo "password" tenha um erro de validação */}
					{errors.password && (
						<p className="text-red-500 text-sm">{errors.password.message}</p>
					)}

					{/* Campo para Confirmar Senha */}
					<label htmlFor="" className="font-semibold text-lg text-zinc-600">
						Confirme sua senha
					</label>
					<input
						{...register("confirmPassword")} // Registra o campo "confirmPassword" no formulário
						type="password" // Define o tipo do campo como senha
						className="px-2 h-8 border border-zinc-300 focus:outline-blue-300 hover:border hover:border-blue-200 rounded-lg"
						placeholder="Ex: *******"
					/>
					{/* Exibe erro caso o campo "confirmPassword" tenha um erro de validação */}
					{errors.confirmPassword && (
						<p className="text-red-500 text-sm">
							{errors.confirmPassword.message}
						</p>
					)}
				</div>

				{/* Botão de envio do formulário */}
				<button
					type="submit" // Define que o botão é de envio do formulário
					className="w-32 h-10 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
				>
					Entrar
				</button>
				<p className="flex flex-row gap-2 py-4">
					Já possui uma conta?{" "}
					<a href="/LogIn" className="text-blue-500 hover:underline ">
						Clique aqui
					</a>
				</p>
			</form>
		</div>
	);
}
