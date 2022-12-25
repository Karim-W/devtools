import React from "react";

export default function LeftTab({
	Tabs,
	handleTabChange,
	currentTab,
}: {
	Tabs: string[];
	handleTabChange: (tab: string) => void;
	currentTab: string;
}) {
	const [hidden, setHidden] = React.useState<string>("");
	const handlehiddenChange = () => {
		if (hidden === "") {
			setHidden("hidden");
			return;
		}
		setHidden("");
	};

	if (hidden === "hidden") {
		return (
			<div className="w-fit h-full bg-stone-800 flex flex-col justify-center items-center">
				<button
					className="text-stone-900 w-4 h-ful py-2 flex z-50 
			flex-row items-center justify-center bg-gray-100 top-1/2
			rounded-r-full hover:scale-95"
					onClick={handlehiddenChange}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</button>
			</div>
		);
	}
	return (
		<div
			className={`relative inset-0 bg-gradient-to-tl from-stone-900 to-stone-700
			 w-1/5 h-full backdrop-blur-xl text-white shadow-2xl drop-shadow-2xl
			 flex flex-col justify-start items-center px-8 ${hidden}`}
		>
			<div className="logo react text-4xl font-medium my-8">DevTools</div>
			<div className="w-full h-full flex flex-col gap-4 text-center">
				{Tabs.map((tab, index) => {
					return (
						<div
							key={index}
							onClick={() => {
								handleTabChange(tab);
							}}
							className={`w-full h-12 border-b-2 border-stone-600
								flex flex-row justify-center items-center text-[1.25rem] 
								text-center hover:opacity-20 hover:bg-black
								hover:rounded-lg ${tab !== currentTab
									? "text-zinc-200"
									: "text-yellow-400 opacity-80"
								}`}
						>
							{tab}
						</div>
					);
				})}
			</div>
			<div
				className="absolute text-stone-900 right-[-1rem] w-4 h-ful py-2 flex 
			flex-row items-center justify-center bg-gray-100 top-1/2
			rounded-r-full hover:scale-95"
				onClick={handlehiddenChange}
			>
				{hidden === "" ? "<" : ">"}
			</div>
		</div>
	);
}
