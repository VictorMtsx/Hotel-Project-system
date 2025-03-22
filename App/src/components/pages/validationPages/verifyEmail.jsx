import { useEffect, useState } from "react";

export default function VerifyEmail() {
	const [message, setMessage] = useState("Verificando...");
	const token = new URLSearchParams(window.location.search).get("token");

	useEffect(() => {
		if (!token) {
			setMessage("Token inválido.");
			return;
		}

		fetch(`/autorization?token=${token}`, {
			method: "GET",
		})
			.then((res) => res.text())
			.then((data) => {
				setMessage(data);
			})
			.catch((error) => {
				console.error("Erro ao verificar e-mail:", error);
				setMessage("Erro ao verificar e-mail.");
			});
	}, [token]);

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<section className="bg-white p-6 rounded-lg shadow-md text-center">
				<h1 className="text-2xl font-bold text-gray-800">{message}</h1>
			</section>
		</div>
	);
}
