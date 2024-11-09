import { Header } from "../components/home-componens/header";
import { SearchBar } from "../components/home-componens/search-bar";
import { SearchOptions } from "../components/home-componens/search-options";
import { Properties } from "../components/Properties/properties";

export function Home() {
	return (
		<div className="w-full h-[647px] border-b-2 bg-zinc-300 font-semibold text-zinc-600">
			<Header />
			<div className="hidden mobile:flex  flex-col h-5/6 justify-end items-center">
				<SearchOptions />
				<SearchBar />
			</div>

			<Properties />
		</div>
	);
}
