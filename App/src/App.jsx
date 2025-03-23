import { useEffect, useState } from "react";
import { Home } from "./components/pages/home";
import HomePage from "./components/home-componens/home-page.jsx";

export default function App() {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const token = localStorage.getItem("token");
		setToken(token);
	}, []);

	return <>{token ? <HomePage /> : <Home />}</>;
}
