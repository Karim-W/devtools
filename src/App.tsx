import React from "react";
import "./App.css";
import "./style.css"
import { TOOLS_TABS } from "./models/constants";
import { matchTab } from "./components";

function App() {
	const Tabs = [
		TOOLS_TABS.UNIX_TIME_CONVERTER,
		TOOLS_TABS.JSON_FORMATTER,
		TOOLS_TABS.JWT_DECODE,
		TOOLS_TABS.HTML_DISPLAY,
	];
	const [activeTab, setActiveTab] = React.useState(TOOLS_TABS.UNIX_TIME_CONVERTER);
	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
	}
	const leftTab = <div className={`bg-gradient-to-tl from-stone-900 to-stone-700 inset-0 bg-gradient-to-tl from-stone-900 to-stone-700
			 w-1/4 h-full backdrop-blur-xl text-white shadow-2xl drop-shadow-2xl
			 flex flex-col justify-start items-center px-8`}>
		<div className="logo react text-4xl font-medium my-8">
			DevTools
		</div>
		<div className="w-full h-full flex flex-col gap-4 text-center">
			{Tabs.map((tab, index) => {
				return (
					<div key={index} onClick={() => { handleTabChange(tab) }} className={`w-full h-12 border-b-2 border-stone-600
								flex flex-row justify-center items-center text-[1.25rem] 
								text-center hover:opacity-20 hover:bg-black hover:rounded-lg`}>
						{tab}
					</div>
				);
			})}
		</div>
	</div>;
	return (
		<div className="h-[100vh] min-w-screen flex flex-row">
			{leftTab}
			<div className="bg-stone-800 w-3/4 h-full flex flex-col justify-start items-center">
				{/* <div className="w-full h-16 backdrop-blur-sm text-white shadow-md drop-shadow-md grid place-items-center"> */}
				<div className="w-full h-16 text-white grid place-items-center">
					<p className="w-1/3 text-center bg-neutral-500 opacity-60 p-2 rounded">{activeTab}</p>
				</div>
				{matchTab(activeTab)}
			</div>
		</div >
	);
}

export default App;
