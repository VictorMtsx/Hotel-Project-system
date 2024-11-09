import { Property } from "./property";
import { TypeAndFilters } from "./typeAndFilters";

export function Properties() {
	return (
		<div className="bg-white">
			<TypeAndFilters />
			<Property />
		</div>
	);
}
