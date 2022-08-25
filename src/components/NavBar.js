import React from "react";
import Search from "../img/search.png";

const NavBar = () => {
	return (
		<nav class="px-2 sm:px-4 py-5 ">
			<div class="flex justify-between items-center">
				<button
					data-collapse-toggle="navbar-default"
					type="button"
					class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden  "
					aria-controls="navbar-default"
					aria-expanded="false"
				>
					<svg
						class="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>

				<div className=" w-full md:hidden flex">
					<input
						type="text"
						placeholder="What are you looking for?"
						className="bg-gray-100 border border-solid border-gray-300 w-full  px-4 rounded-3xl	text-xl focus:outline-none inputFiled "
					/>
					<div className="primary flex p-3 px-8 rounded-3xl ml-[-40px]	">
						<button className=" flex items-center justify-center" type="button">
							<img src={Search} alt="Search" />
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
