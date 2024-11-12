export function BookARoom() {
	return (
		<section className=" w-full bg-white pt-14  flex flex-row items-center justify-center">
			<form
				method="post"
				className="w-5/6 h-64 bg-[#E9F3F6] flex flex-col items-center justify-around rounded-xl"
			>
				<div className="flex flex-col items-center">
					<h1 className="text-2xl font-semibold">Book a Room</h1>
					<p className="text-sm font-medium text-zinc-500">
						Discover the perfect space for you!
					</p>
				</div>
				<div className="w-full flex flex-row items-center justify-around gap-4">
					<div className="flex flex-col gap-4">
						<label htmlFor="Date" className="font-semibold text-sm">
							Date
						</label>
						<input
							type="date"
							placeholder="date"
							className="px-3 py-1 rounded-md"
						/>
					</div>
					<div className="flex flex-col gap-4">
						<label htmlFor="Person" className="font-semibold text-sm">
							Person
						</label>
						<div className="flex flex-row justify-center items-center gap-2">
							<img src="/public/adults.png" alt="" className="h-5" />
							<input
								type="number"
								placeholder="Ex: 2"
								className="px-3 py-1 w-24 rounded-md"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<label htmlFor="Children" className="font-semibold text-sm">
							Children
						</label>
						<div className="flex flex-row justify-center items-center gap-2">
							<img src="/public/children.png" alt="" className="h-5" />
							<input
								type="number"
								placeholder="Ex: 2"
								className="px-3 py-1 w-24 rounded-md"
							/>
						</div>
					</div>
					<button
						type="submit"
						className=" h-10 px-4  mt-6 bg-[#65AEF2] rounded-xl cursor-pointer hover:bg-blue-500"
					>
						<p className="font-bold text-white">BOOK NOW</p>
					</button>
				</div>
			</form>
		</section>
	);
}
