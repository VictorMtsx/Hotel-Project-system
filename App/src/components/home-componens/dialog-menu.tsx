import * as Dialog from "@radix-ui/react-dialog";
import "../../index.css";

export function DialogMenu() {
	return (
		<>
			<Dialog.Root>
				<Dialog.Trigger asChild>
					<button type="button" className="mobile:hidden block">
						<img
							src="./src/assets/auth btn.png"
							className="hover:cursor-pointer hover:opacity-40"
							alt=""
						/>
					</button>
				</Dialog.Trigger>

				<Dialog.Portal>
					<Dialog.DialogContent className="fixed top-0 left-0 w-4/5 h-screen border-2 border-zinc-400 bg-gray-300  ">
						<Dialog.DialogClose className=" hover:cursor-pointer hover:opacity-40 absolute top-3 right-3">
							<img src="./src/assets/Vector.png" alt="" className="" />
						</Dialog.DialogClose>
						<form
							action="POST"
							className="w-full h-3/4 gap-5 flex flex-col justify-center items-center  bg-zinc-300"
						>
							<div className="mb-8  ">
								<img src="./src/assets/LOGO.png" alt="" />
							</div>
							<section className=" flex flex-col">
								<label
									htmlFor=""
									className="text-lg ml-2 font-semibold text-zinc-700"
								>
									Location
								</label>
								<input
									placeholder="Which location do you prefer?"
									type="text"
									className=" w-[250px] h-8 mobile:w-[300px]  mobile:h-10 mobile:ml-2 pl-2 rounded-sm font-semibold text-sm"
								/>
							</section>
							<section className="flex flex-col">
								<label
									htmlFor=""
									className="text-lg ml-2 font-semibold text-zinc-700"
								>
									Check In
								</label>
								<input
									placeholder="Add Dates"
									type="text"
									className="w-[250px] h-8 mobile:w-[300px]  mobile:h-10 mobile:ml-2 pl-2 rounded-sm font-semibold text-sm"
								/>
							</section>
							<section className="flex flex-col">
								<label
									htmlFor=""
									className="text-lg ml-2 font-semibold text-zinc-700"
								>
									Check Out
								</label>
								<input
									placeholder="Add Dates"
									type="text"
									className="w-[250px] h-8 mobile:w-[300px]  mobile:h-10 mobile:ml-2 pl-2 rounded-sm font-semibold text-sm"
								/>
							</section>
							<section className="flex flex-col">
								<label
									htmlFor=""
									className="text-lg ml-2 font-semibold text-zinc-700"
								>
									Guests
								</label>
								<input
									placeholder="Add Guests"
									type="text"
									className="w-[250px] h-8 mobile:w-[300px]  mobile:h-10 mobile:ml-2 pl-2 rounded-sm font-semibold text-sm"
								/>
							</section>
							<div className="w-full flex justify-center items-center mobile:justify-end:flex">
								<button
									type="submit"
									className="w-[100px] mobile:w-1/6 h-12 gap-3 flex flex-row justify-center items-center border-2 bg-zinc-400 rounded-2xl mt-3 mr-3"
								>
									<img
										src="../src/assets/search-no-bg.png"
										alt="button submit search"
										className=""
									/>
								</button>
							</div>
						</form>
						<div className=" border-t-2 border-zinc-400 w-full flex justify-center pt-3 mb-3">
							<img src="../../src/assets/FIND.png" alt="" />
						</div>
						<div className="w-full grid grid-cols-2 px-3 py-2 gap-2  border-zinc-400">
							<section className="flex flex-row items-center justify-center gap-2">
								<label htmlFor="">Rooms</label>
								<input
									type="checkbox"
									name="Rooms"
									id=""
									alt="Rooms"
									className=" size-4"
								/>
							</section>
							<section className="flex flex-row items-center justify-center gap-2">
								<label htmlFor="">Flats</label>
								<input
									type="checkbox"
									name="Rooms"
									id=""
									alt="Flats"
									className=" size-4"
								/>
							</section>
							<section className="flex flex-row items-center justify-center gap-2">
								<label htmlFor="">Hostels</label>
								<input
									type="checkbox"
									name="Rooms"
									id=""
									alt="Hostels"
									className=" size-4"
								/>
							</section>
							<section className="flex flex-row items-center justify-center gap-2">
								<label htmlFor="">Villas</label>
								<input
									type="checkbox"
									name="Rooms"
									id=""
									alt="Villas"
									className=" size-4"
								/>
							</section>
						</div>
					</Dialog.DialogContent>
				</Dialog.Portal>
			</Dialog.Root>
		</>
	);
}
