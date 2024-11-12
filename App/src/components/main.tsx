import { About } from "./home-componens/about";
import { BookARoom } from "./home-componens/Book-a-Room";
import { SpecialOffers } from "./home-componens/specialOffers";

export function Main() {
	return (
		<>
			<BookARoom />
			<About />
			<SpecialOffers />
		</>
	);
}
