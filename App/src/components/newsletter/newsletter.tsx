export function Newsletter() {
	return (
		<div className="w-full h-32 m-auto bg-zinc-300 text-zinc-600 pb-24 pt-12">
			<div className=" flex flex-row justify-center items-start ">
				<div className="mr-5">
					<p className="text-lg font-bold text-zinc-800">NEWSLETTER</p>
					<p className="text-sm font-medium text-zinc-700">Stay Upto Date</p>
				</div>
				<button
					className="w-[794px] h-14 flex flex-row justify-between items-center gap-2 bg-white rounded-full"
					type="button"
				>
					<input className="w-3/4 ml-2" type="text" placeholder="Your email" />
					<img
						className="bg-zinc-500 p-4 rounded-full"
						src="./src/assets/ph_paper-plane.png"
						alt=""
					/>
				</button>
			</div>
		</div>
	);
}
