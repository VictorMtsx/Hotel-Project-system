export function About() {
	return (
		<>
			<div className="box-border mt-24 px-20 py-10 w-full h-auto bg-zinc-200 grid grid-cols-3 gap-4 ">
				<div className=" row-span-2 h-[300px]">
					<img
						src="/public/Rooms1.png"
						alt=""
						className=" z-10  bg-cover object-cover rounded-xl "
					/>
				</div>
				<div className="">
					<img
						src="/public/rooms2.png"
						alt=""
						className=" z-10  bg-cover object-cover rounded-xl"
					/>
				</div>
				<div className="">
					<img
						src="/public/rooms3.png"
						alt=""
						className=" z-10 bg-cover object-cover rounded-xl"
					/>
				</div>
				<div className="">
					<img
						src="/public/rooms4.png"
						alt=""
						className=" z-10  bg-cover object-cover rounded-xl"
					/>
				</div>
				<div className="">
					<img
						src="/public/rooms5.png"
						alt=""
						className=" z-10  bg-cover object-cover rounded-xl"
					/>
				</div>
			</div>
		</>
	);
}
