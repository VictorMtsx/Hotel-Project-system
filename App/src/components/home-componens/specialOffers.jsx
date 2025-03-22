export function SpecialOffers() {
	return (
		<section className="w-full h-auto pt-16 px-20">
			<div className="flex flex-row items-center gap-4 justify-between ">
				<div className="flex flex-col gap-7">
					<p className="text-blue-500 text-xl font-medium">Special Offers</p>
					<h2 className="text-4xl font-semibold">Best offer of the month</h2>
					<p className="">
						Experience Fantastic Benefits and Obtain Better Rates When You Make
						a Direct Booking on Our Official Website
					</p>
				</div>
				<div className="">
					<p className="">
						<a href="" className="text-blue-500 font-medium underline">
							View all
						</a>
					</p>
				</div>
			</div>

			<div className="w-full h-auto pt-16 flex flex-row items-center ">
				<div className="w-full grid grid-cols-3 gap-4">
					<div className="w-[90%] shadow border-[1px] rounded-3xl border-zinc-300 flex flex-col	 gap-3 p-4">
						<img src="/public/honeymoon.svg" alt="" className="w-full" />
						<p className="text-zinc-500 text-sm font-medium">Room</p>
						<div className="flex flex-row items-center justify-between gap-2">
							<h3 className="text-2xl font-bold">Honeymoon</h3>
							<div className="flex flex-row gap-1">
								<img src="/public/adults.png" alt="" className="" />
								<p className="font-semibold">2</p>
							</div>
						</div>
						<p className="text-zinc-600 text-sm">
							Indulge in a Memorable One-Time Romantic Dinner for Two
						</p>
						<div className="w-full flex flex-row items-center justify-center">
							<p className="">
								<span className="text-3xl font-bold">$699</span>
								/night
							</p>
						</div>
					</div>
					<div className="w-[90%] shadow border-[1px] rounded-3xl border-zinc-300 flex flex-col	 gap-3 p-4">
						<img src="/public/meetings.svg" alt="" className="w-full" />
						<p className="text-zinc-500 text-sm font-medium">Room</p>
						<div className="flex flex-row items-center justify-between gap-2">
							<h3 className="text-2xl font-bold">Meetings</h3>
							<div className="flex flex-row gap-1">
								<img src="/public/adults.png" alt="" className="" />
								<p className="font-semibold">30</p>
							</div>
						</div>
						<p className="text-zinc-600 text-sm">
							Experience an Exclusively Private Environment to Boost Your
							Productivity
						</p>
						<div className="w-full flex flex-row items-center justify-center">
							<p className="">
								<span className="text-3xl font-bold">$999</span>
								/night
							</p>
						</div>
					</div>
					<div className="w-[90%] shadow border-[1px] rounded-3xl border-zinc-300 flex flex-col	 gap-3 p-4">
						<img src="/public/romantic-dining.svg" alt="" className="w-full" />
						<p className="text-zinc-500 text-sm font-medium">Dining</p>
						<div className="flex flex-row items-center justify-between gap-2">
							<h3 className="text-2xl font-bold">Meetings</h3>
							<div className="flex flex-row gap-1">
								<img src="/public/adults.png" alt="" className="" />
								<p className="font-semibold">2</p>
							</div>
						</div>
						<p className="text-zinc-600 text-sm">
							Indulge in a Memorable One-Time Romantic Dinner for Two
						</p>
						<div className="w-full flex flex-row items-center justify-center">
							<p className="">
								<span className="text-3xl font-bold">$499</span>
								/night
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
