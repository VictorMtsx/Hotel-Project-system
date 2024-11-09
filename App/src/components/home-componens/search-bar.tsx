export function SearchBar() {
	return (
		<div className=" mobile:w-dvw max-w-[620px] flex flex-row h-[70px] justify-around items-center  bg-white rounded-full ">
			<div className=" w-[203px]  ml-2">
				<p>location</p>
				<input
					type="text"
					placeholder="Which city do you prefer?"
					className="w-full font-semibold text-sm"
				/>
			</div>
			<div className="w-[80px] ml-2">
				<p>Check In</p>
				<input
					type="text"
					placeholder="Add Dates"
					className="w-full font-semibold text-sm"
				/>
			</div>
			<div className="w-[130px] ml-2">
				<p>Check Out</p>
				<input
					type="text"
					placeholder="Add Date"
					className="w-full font-semibold text-sm"
				/>
			</div>
			<div className="w-[90px] ml-2">
				<p>Guests</p>
				<input
					type="text"
					placeholder="Add Guests"
					className="w-full font-semibold text-sm"
				/>
			</div>
			<button type="button" className="w-[80px] justify-center items-center">
				<img
					src="./src/assets/round-search.png"
					alt="search"
					className="ml-5 flex"
				/>
			</button>
		</div>
	);
}
