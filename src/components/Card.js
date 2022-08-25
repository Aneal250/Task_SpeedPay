import React from "react";

const Card = () => {
	return (
		<div className="flex-shrink-0 mx-4 px-4  bg bg-gray-100 rounded-3xl h-[200px] w-[200px] items-center bg-blend-darken text-white">
			<div className="mt-[100px]">
				<h3 className="font-bold">Salmon Tartar</h3>
				<p className="text-xm text-card">
					Lorem ipsum dolor sit amet consectetur
				</p>
			</div>

			<div className="flex flex-row justify-between">
				<div>
					<p className="text-xm font-bold">UAE 120</p>
				</div>
				<div>
					<span>
						<svg
							aria-hidden="true"
							class="w-4 h-4 text-white"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>First star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
					</span>
					<span>4.5</span>
				</div>
			</div>
		</div>
	);
};

export default Card;
