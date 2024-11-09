export function TypeAndFilters() {
	return (
		<>
			<ul className="flex flex-row  w-full h-12 items-center justify-around  pt-16 px-3 text-lg">
				<div className="flex flex-row gap-8 ">
					<li className="">
						<a className="" href="#">
							Apartments
						</a>
					</li>

					<li className="">
						<a className="" href="#">
							Houses
						</a>
					</li>
					<li className="">
						<a className="" href="#">
							Villas
						</a>
					</li>
					<li className="">
						<a className="" href="#">
							Homestays
						</a>
					</li>
					<li className="">
						<a className="" href="#">
							Villas
						</a>
					</li>
					<li className="">
						<a className="" href="#">
							More
						</a>
					</li>
				</div>
				<li>
					<button
						className="flex flex-row gap-1 justify-center items-center rounded-full w-[146px] h-[40px] py-6 bg-white border-2 border-zinc-300"
						type="button"
					>
						{" "}
						<img src="../src/assets/filter-icon.png" alt="" />
						<p>Filters</p>
					</button>
				</li>
			</ul>
		</>
	);
}
