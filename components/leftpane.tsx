export default function LeftTab({
	Tabs,
	handleTabChange,
}: {
	Tabs: string[];
	handleTabChange: (tab: string) => void;
}) {
	return (
		<div
			className={`bg-gradient-to-tl from-stone-900 to-stone-700 inset-0 bg-gradient-to-tl from-stone-900 to-stone-700
			 w-1/5 h-full backdrop-blur-xl text-white shadow-2xl drop-shadow-2xl
			 flex flex-col justify-start items-center px-8`}
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
								text-center hover:opacity-20 hover:bg-black hover:rounded-lg`}
						>
							{tab}
						</div>
					);
				})}
			</div>
		</div>
	);
}
