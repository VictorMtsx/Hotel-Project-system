import { SignInOptionsDropDown } from "../login-components/sign-in options-dropDown";
import { DialogMenu } from "./dialog-menu";

export function Header() {
	return (
		<header className=" bg-zinc-300 ">
			<nav className=" w-full flex flex-row justify-around px-3">
				<ul
					className=" w-full h-[50px]  
				 flex flex-row gap-4  items-center justify-around"
				>
					<DialogMenu />

					<li className="">
						<img src="./src/assets/LOGO.png" alt="Logo" className="" />
					</li>
					<div
						className=" tablet:flex hidden
					 flex-row gap-8"
					>
						<li>
							<a
								className="
							text-lg"
								href="#"
							>
								Find a Property
							</a>
						</li>
						<li>
							<a
								className="
							text-lg"
								href="#"
							>
								Share Stories
							</a>
						</li>
						<li>
							<a
								className="
							text-lg"
								href="#"
							>
								Rental Guides
							</a>
						</li>
						<li>
							<a
								className="
							text-lg"
								href="#"
							>
								Download Mobile App
							</a>
						</li>
					</div>
					<div
						className=" mobile:
					flex flex-row gap-4"
					>
						<button
							className="mobile:inline hidden h-[46px] w-[186px] bg-zinc-600 text-center hover:bg-zinc-500 hover:text-zinc-800 hover:font-bold rounded-full text-white"
							type="button"
						>
							Become a Host
						</button>
						<SignInOptionsDropDown />
					</div>
				</ul>
			</nav>
		</header>
	);
}
