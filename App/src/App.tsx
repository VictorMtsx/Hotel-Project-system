import "./index.css";
import { Home } from "./pages/home";
import { Properties } from "./components/Properties/properties";
import { Newsletter } from "./components/newsletter/newsletter";
import { Footer } from "./components/home-componens/footer";

export default function App() {
	return (
		<>
			<Home />
			<Properties />
			<Newsletter />
			<Footer />
		</>
	);
}
