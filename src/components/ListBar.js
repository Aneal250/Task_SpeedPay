import React from "react";
import Food from "../img/fast-food.png";

const ListBar = () => {
	return (
		<div className="flex flex-row p-4 w-full overflow-x-auto">
			<div className="mx-4 flex-shrink-0 h-[80px] w-[200px] rounded-md card_list p-2 flex flex-row items-center justify-center">
				<div>
					<img src={Food} alt="" />
				</div>
				<div className="mx-4">
					<h3>Resturant</h3>
				</div>
			</div>

			<div className=" mx-4 flex-shrink-0 h-[80px] w-[200px] rounded-md card_list p-2 flex flex-row items-center justify-center">
				<div>
					<img src={Food} alt="" />
				</div>
				<div className="mx-4">
					<h3>Resturant</h3>
				</div>
			</div>
			<div className=" mx-4 flex-shrink-0 h-[80px] w-[200px] rounded-md card_list p-2 flex flex-row items-center justify-center">
				<div>
					<img src={Food} alt="" />
				</div>
				<div className="mx-4">
					<h3>Resturant</h3>
				</div>
			</div>
		</div>
	);
};

export default ListBar;
