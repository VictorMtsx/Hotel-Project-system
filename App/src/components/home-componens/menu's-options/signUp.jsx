import React, { useEffect, useRef } from "react";
import ValidarFormulario from "../../../functions/checaErroForm";
import "../../../index.css";

export function SignUp() {
	const formRef = useRef(null);

	useEffect(() => {
		const formulario = formRef.current;
		const validar = new ValidarFormulario(formulario);

		const handleSubmit = (event) => validar.handleSubmit(event);
		formulario.addEventListener("submit", handleSubmit);

		return () => {
			formulario.removeEventListener("submit", handleSubmit);
		};
	}, []);

	return (
		<div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-slate-300 to-slate-500">
			<form
				ref={formRef}
				action=""
				method="post"
				className="shadow SignUp w-[500px] h-auto flex flex-col gap-4 border-[1px] bg-zinc-100 border-zinc-300 rounded-3xl items-center justify-around "
			>
				<h1 className="text-3xl font-bold text-blue-400">Welcome!</h1>
				<div className="flex flex-col gap-4">
					<label htmlFor="" className="font-semibold text-lg text-zinc-600">
						Digite seu nome completo
					</label>
					<input
						name="name"
						type="text"
						className=" px-2 h-8 border border-zinc-300 focus:outline-blue-300  hover:border hover:border-blue-200 rounded-lg "
						placeholder="Ex: Joao da Silva Carvalho "
					/>
					<label htmlFor="" className="font-semibold text-lg text-zinc-600">
						Email
					</label>
					<input
						name="email"
						type="text"
						className=" px-2 h-8 border border-zinc-300 focus:outline-blue-300 hover:border hover:border-blue-200 rounded-lg "
						placeholder="Ex: example@example.com"
					/>
					<label htmlFor="" className="font-semibold text-lg text-zinc-600">
						Como gosta de ser chamado?
					</label>
					<input
						name="apelido"
						type="text"
						className="px-2 h-8 border border-zinc-300 focus:outline-blue-300 hover:border hover:border-blue-200 rounded-lg "
						placeholder="Ex: Dr. João "
					/>
					<label htmlFor="" className="font-semibold text-lg text-zinc-600">
						Digite sua senha
					</label>
					<input
						name="password"
						type="password"
						className="px-2 h-8 border border-zinc-300 focus:outline-blue-300 hover:border hover:border-blue-200 rounded-lg "
						placeholder="Ex: *******"
					/>
					<label htmlFor="" className="font-semibold text-lg text-zinc-600">
						Confirme sua senha
					</label>
					<input
						name="confirmPassword"
						type="password"
						className="px-2 h-8 border border-zinc-300 focus:outline-blue-300 hover:border hover:border-blue-200 rounded-lg "
						placeholder="Ex: *******"
					/>
				</div>

				<button
					type="submit"
					className="w-32 h-10 bg-blue-500  text-white rounded-lg hover:bg-blue-600 "
				>
					Entrar
				</button>
				<p className="flex flex-row gap-2 py-4">
					Já possui uma conta?{" "}
					<a href="/LogIn" className="text-blue-500 hover:underline ">
						Clique aqui
					</a>
				</p>
			</form>
		</div>
	);
}
