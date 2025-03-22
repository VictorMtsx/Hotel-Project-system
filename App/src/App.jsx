import { useEffect, useState } from "react";
import { Home } from "./components/pages/home";
import HomePage from "./components/home-componens/home-page.jsx";

export default function App() {
	const [token, setToken] = useState(null);

	// Verifica o token assim que o componente é montado
	useEffect(() => {
		const token = localStorage.getItem("token");
		setToken(token);
	}, []); // O efeito será executado uma vez ao carregar o componente

	// Se o token ainda não foi carregado, pode mostrar algo como loading
	if (token === null) {
		return <div>Carregando...</div>;
	}

	return <>{token ? <HomePage /> : <Home />}</>;
}
