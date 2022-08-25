import React from "react";

const ListTitle = (props) => {
	return (
		<div className="flex justify-between mt-10 px-4">
			<div>
				<h1 className="font-extrabold text-2xl">{props.title}</h1>
			</div>
			<div>
				<button class=" mx-auto bg-transparent font-semibold text-green-500 py-2 px-4 border border-green-500  rounded-3xl">
					View All
				</button>
			</div>
		</div>
	);
};

export default ListTitle;
