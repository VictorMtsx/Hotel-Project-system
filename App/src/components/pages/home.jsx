import { Footer } from "../footer";
import { Header } from "../header";
import { Main } from "../main";
import HomeLogin from "./home-logIn/home-logIn";

export function Home() {
	return (
		<>
			<Header />
			<Main />
			<Footer />
			<HomeLogin />
		</>
	);
}
