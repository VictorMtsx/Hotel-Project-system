import "../../index.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function DropDownMenu() {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button
					type="button"
					className=" p-1 rounded-full bg-zinc-200 cursor-pointer "
				>
					<img src="/public/Account.png" alt="Account-image" />
				</button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					className="min-w-[100px]  animate-none flex flex-col justify-center  items-center gap-3 rounded-md bg-white p-[5px] "
					sideOffset={5}
				>
					<DropdownMenu.Item>
						<a href="#" className="p-2 hover:font-medium">
							Sign Up
						</a>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<a href="#" className="p-2 hover:font-medium">
							Log in
						</a>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<a href="#" className="p-2 hover:font-medium">
							Sign out
						</a>
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
}
