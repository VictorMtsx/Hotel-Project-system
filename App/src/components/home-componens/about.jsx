export function About() {
	return (
		<>
			<div className="box-border mt-24 px-20 py-10 w-full h-auto bg-zinc-200 grid grid-cols-3 gap-4 ">
				<div className=" row-span-2 h-auto">
					<img
						src="/public/room1.svg"
						alt=""
						className=" z-10  bg-cover object-cover rounded-xl "
					/>
				</div>
				<div className="">
					<img
						src="/public/dining.svg"
						alt=""
						className=" z-10  bg-cover object-cover rounded-xl"
					/>
				</div>
				<div className="">
					<img
						src="/public/Service & Facilities.svg"
						alt=""
						className=" z-10 bg-cover object-cover rounded-xl"
					/>
				</div>
				<div className="">
					<img
						src="/public/Conferences & Meetings.svg"
						alt=""
						className=" z-10  bg-cover object-cover rounded-xl"
					/>
				</div>
				<div className="">
					<img
						src="/public/Wedding Package.svg"
						alt=""
						className=" z-10  bg-cover object-cover rounded-xl"
					/>
				</div>
			</div>
		</>
	);
}
