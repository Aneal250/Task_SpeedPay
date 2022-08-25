import React from "react";
import Card from "./Card";

const CardList = () => {
	return (
		<div className="flex flex-row p-4 w-full overflow-x-auto">
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default CardList;
