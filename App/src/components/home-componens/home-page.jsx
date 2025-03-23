import { useEffect } from "react";

export default function HomePage() {
	const TIMEOUT = 2 * 60 * 1000;

	useEffect(() => {
		let timer;

		const resetTimer = () => {
			if (timer) clearTimeout(timer);

			timer = setTimeout(() => {
				localStorage.removeItem("token");
				alert("Sessão expirada. Você foi deslogado.");
				window.location.href = "/Login";
			}, TIMEOUT);
		};

		const events = ["click", "mousemove", "keydown"];

		for (const event of events) {
			window.addEventListener(event, resetTimer);
		}

		resetTimer();

		return () => {
			for (const event of events) {
				window.removeEventListener(event, resetTimer);
			}
			if (timer) clearTimeout(timer);
		};
	}, []);

	return (
		<>
			<h1>Home Page</h1>
			<p>Se você ficar inativo por 10 minutos, será deslogado.</p>
		</>
	);
}
