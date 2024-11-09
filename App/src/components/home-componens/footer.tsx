export function Footer() {
	return (
		<>
			<div className="w-full h-auto flex flex-row pt-24 justify-around items-center bg-zinc-200">
				<div className="w-96 h-56 mb-24">
					<img src="../src/assets/LOGO.png" alt="" />
					<p className="py-11">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
					</p>
					<div className="flex flex-row gap-4">
						<button
							type="button"
							className="flex flex-row gap-3 w-36 h-11 py-1.5 px-5 bg-zinc-300 justify-start items-center rounded-lg
							cursor-pointer"
						>
							<img
								src="../src/assets/ion_logo-google-playstore.png"
								alt=""
								className="size-6"
							/>
							<p className="text-lg h-5 mb-2 font-semibold size-4 text-zinc-600 justify-center items-center">
								PlayStore
							</p>
						</button>
						<button
							type="button"
							className="flex flex-row gap-3 w-36 h-11 py-1.5 px-5 bg-zinc-300 justify-start items-center rounded-lg cursor-pointer"
						>
							<img
								src="../src/assets/ion_logo-apple-appstore.png"
								alt=""
								className="size-6"
							/>
							<p className="text-lg h-5 mb-2 font-semibold size-4 text-zinc-600 justify-center items-center">
								AppleStore
							</p>
						</button>
					</div>
				</div>
				<div className="flex flex-row gap-10 mt-[-65px]">
					<ul className="">
						<h2 className="font-bold mb-6 pt-0">COMPANY</h2>
						<li className="">
							<a className="text-zinc-800" href="">
								About Us
							</a>
						</li>
						<li className="">
							<a className="text-zinc-800" href="">
								Legal
							</a>
						</li>
						<li className="">
							<a className="text-zinc-800" href="">
								Contact Us
							</a>
						</li>
						<li className="">
							<a className="text-zinc-800" href="">
								Blogs
							</a>
						</li>
					</ul>
					<ul className="">
						<h2 className="font-bold mb-6">HELP CENTER</h2>
						<li className="">
							<a className="text-zinc-800" href="">
								Find a Property
							</a>
						</li>
						<li className="">
							<a className="text-zinc-800" href="">
								How To Host?
							</a>
						</li>
						<li className="">
							<a className="text-zinc-800" href="">
								Why Us?
							</a>
						</li>
						<li className="">
							<a className="text-zinc-800" href="">
								FAQs
							</a>
						</li>
						<li className="">
							<a className="text-zinc-800" href="">
								Rental Guides
							</a>
						</li>
					</ul>
					<ul className="">
						<h2 className="font-bold mb-6">CONTACT INFO</h2>
						<li className="">
							<a className="text-zinc-800" href="">
								Phone: 1234567890
							</a>
						</li>
						<li className="">
							<a className="text-zinc-800" href="">
								Email: company@email.com
							</a>
						</li>
						<li className="">
							<a className="text-zinc-800" href="">
								Location: 100 Smart Street, LA, USA
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="pt-12 border-t-2 pb-8 border-zinc-300 bg-zinc-200">
				<section className="flex flex-row justify-around items-center">
					<p className="font-bold text-zinc-800">
						© 2022 thecreation.design | All rights raserved
					</p>
					<p className="font-bold text-zinc-800">
						Created with love by thecreation.design
					</p>
				</section>
			</div>
		</>
	);
}
