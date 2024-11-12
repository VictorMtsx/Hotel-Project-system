import { motion } from "framer-motion";
import { DropDownMenu } from "./home-componens/dropdown-menu";

const navAnimation = () => ({
	initial: { x: -40, opacity: 0 },
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1.2,
			delay: 0.5,
		},
	},
});

const Welcome = () => ({
	initial: { x: -40, opacity: 0 },
	animate: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1.2,
			delay: 0.5,
		},
	},
});

const dropdown = () => ({
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: 1.2,
			delay: 0.3,
		},
	},
});

export function Header() {
	return (
		<header className="w-full h-[790px]">
			<img
				src="/public/home-image.svg"
				alt=""
				className="z-[-1] absolute top-0 w-full object-cover h-[790px]"
			/>
			<motion.nav
				variants={navAnimation()}
				initial="initial"
				animate="animate"
				className=" z-[1] hidden mobile:flex w-full h-22 pt-6 justify-center  "
			>
				<ul className=" flex flex-row  w-5/6 h-14 bg-white gap-8 items-center justify-around rounded-xl">
					<li className="font-semibold text-zinc-600">
						<a href="">Home</a>
					</li>
					<li className="font-semibold text-zinc-600">
						<a href="">About</a>
					</li>
					<li className="font-semibold text-zinc-600">
						<a href="">Rooms</a>
					</li>
					<li className="font-semibold text-zinc-600">
						<img src="/public/logo.png" alt="" className="w-14 " />
					</li>
					<li className="font-semibold text-zinc-600">
						<a href="">Services</a>
					</li>
					<li className="font-semibold text-zinc-600">
						<a href="">Special Offers</a>
					</li>
					<motion.li
						variants={dropdown()}
						initial="initial"
						animate="animate"
						className="font-semibold text-zinc-600"
					>
						<DropDownMenu />
					</motion.li>
				</ul>
			</motion.nav>
			<nav className=" z-[1]  mobile:hidden  flex w-5/6 bg-white h-12 items-center justify-between">
				<h1 className=" text-2xl text-red-800">mobile</h1>
			</nav>
			<motion.div
				variants={Welcome()}
				initial="initial"
				animate="animate"
				className="relative hidden mobile:flex z-[1]  h-12 pt-60 pl-32 justify-start items-center"
			>
				<h1 className="text-6xl font-semibold text-white">
					Discover Extraordinary
					<br />
					Comfort in Hotels!
				</h1>
			</motion.div>
		</header>
	);
}
