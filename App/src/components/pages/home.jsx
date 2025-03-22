import { Footer } from "../footer";
import { Header } from "../header";
import HomePage from "../home-componens/home-page";
import { Main } from "../main";

export function Home() {
	return (
		<>
			<Header />
			<Main />
			<Footer />
			<HomePage />
		</>
	);
}
