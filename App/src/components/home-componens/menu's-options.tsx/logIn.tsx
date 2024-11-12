export function LogIn() {
	return (
		<div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-slate-300 to-slate-500">
			<form
				action=""
				method="post"
				className="shadow w-[500px] h-[400px] flex flex-col gap-4 border-[1px] bg-zinc-100 border-zinc-300 rounded-3xl items-center justify-around "
			>
				<h1 className="text-3xl font-bold text-blue-400">Welcome!</h1>
				<div className="flex flex-col gap-6">
					<label htmlFor="" className="font-semibold text-lg text-zinc-600">
						Nome de Usuário ou e-mail
					</label>
					<input
						type="text"
						className="px-2 h-8 focus:outline-blue-300  hover:border hover:border-blue-200 rounded-lg "
						placeholder="Ex: João da Silva Ferreira / 9CfZo@example.com "
					/>
					<label htmlFor="" className="font-semibold text-lg text-zinc-600">
						Senha
					</label>
					<input
						type="password"
						className="px-2 h-8 focus:outline-blue-300 hover:border hover:border-blue-200 rounded-lg "
						placeholder="Ex: ******* "
					/>
				</div>

				<button
					type="submit"
					className="w-32 h-10 bg-blue-500  text-white rounded-lg hover:bg-blue-600 "
				>
					Entrar
				</button>
				<p className="flex flex-row gap-2">
					Não possui uma conta?{" "}
					<a href="#" className="text-blue-500 hover:underline ">
						Clique aqui
					</a>
				</p>
			</form>
		</div>
	);
}
