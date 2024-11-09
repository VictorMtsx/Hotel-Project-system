import {
	DropdownMenu,
	DropdownMenuArrow,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import "../../index.css";

export function SignInOptionsDropDown() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className=" text-sm font-medium text-gray-500 hover:text-gray-700 ">
				<button
					type="button"
					className="bg-white  w-12 flex items-center justify-center mobile:px-5 mobile:gap-2  rounded-full mobile:rounded-full cursor-pointer mobile:bg-white hover:bg-zinc-500"
				>
					<img
						src="../../src/assets/auth btn.png"
						className="hidden mobile:block hover:cursor-pointer ml-1 "
						alt=""
					/>
					<img src="../../src/assets/profile-circle.png" className="" alt="" />
				</button>
			</DropdownMenuTrigger>
			<DropdownMenuPortal>
				<DropdownMenuContent side="bottom">
					<DropdownMenuArrow className="DropdownMenuArrow" />
					<DropdownMenuItem>
						<ul className="w-44 bg-white px-4 py-3 shadow-lg rounded-lg">
							<li className="flex flex-col gap-2">
								<a
									href="/Sign-up"
									className="hover:text-gray-700 hover:font-bold hover:border-b-2 box-border"
								>
									Sign Up
								</a>
								<a
									href=""
									className="hover:text-gray-700 hover:font-bold hover:border-b-2 box-border"
								>
									Login
								</a>
								<a
									href=""
									className="hover:text-gray-700 hover:font-bold hover:border-b-2 box-border"
								>
									Help Center
								</a>
							</li>
						</ul>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenuPortal>
		</DropdownMenu>
	);
}
