import Head from "next/head";
import Image from "next/image";
import React from "react";
import { MatchTab } from "../components";
import Base64 from "../components/base64";
import Diff from "../components/diff";
import Epoch from "../components/epoch";
import Hash from "../components/hash";
import HTMLDisplay from "../components/htmlDisplay";
import JsonFormatter from "../components/jsonFormatter";
import JWTDecoder from "../components/jwtDecoder";
import LeftTab from "../components/leftpane";
import MarkdownPreview from "../components/markdownPreview";
import Mermaid from "../components/mermaid";
import StringGenerator from "../components/stringGenerator";
import { TOOLS_TABS } from "../models/constants";
import styles from "../styles/Home.module.css";

export default function Home() {
	const Tabs = [
		TOOLS_TABS.JSON_FORMATTER,
		TOOLS_TABS.UNIX_TIME_CONVERTER,
		TOOLS_TABS.JWT_DECODE,
		TOOLS_TABS.HTML_DISPLAY,
		TOOLS_TABS.BASE_64,
		TOOLS_TABS.STRING_GENERATOR,
		TOOLS_TABS.DIFF,
		TOOLS_TABS.MARKDOWN,
		TOOLS_TABS.HASH,
	];
	const [activeTab, setActiveTab] = React.useState("");
	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
	};
	return (
		<div className="h-[100vh] min-w-screen flex flex-row">
			<LeftTab
				Tabs={Tabs}
				handleTabChange={handleTabChange}
				currentTab={activeTab}
			/>
			<div className="bg-stone-800 w-full h-full flex flex-col justify-start items-center overflow-scroll p-4">
				{/* <div className="w-full h-16 backdrop-blur-sm text-white shadow-md drop-shadow-md grid place-items-center"> */}
				<div className="w-full h-16 text-white grid place-items-center">
					{activeTab !== "" && (
						<p className="w-1/3 text-center bg-neutral-500 opacity-60 p-2 rounded">
							{activeTab}
						</p>
					)}
				</div>
				{activeTab === TOOLS_TABS.UNIX_TIME_CONVERTER && <Epoch />}
				{activeTab === TOOLS_TABS.JSON_FORMATTER && <JsonFormatter />}
				{activeTab === TOOLS_TABS.JWT_DECODE && <JWTDecoder />}
				{activeTab === TOOLS_TABS.HTML_DISPLAY && <HTMLDisplay />}
				{activeTab === TOOLS_TABS.BASE_64 && <Base64 />}
				{activeTab === TOOLS_TABS.STRING_GENERATOR && <StringGenerator />}
				{activeTab === TOOLS_TABS.DIFF && <Diff />}
				{activeTab === TOOLS_TABS.MARKDOWN && <MarkdownPreview />}
				{activeTab === TOOLS_TABS.HASH && <Hash />}
				{activeTab === "" && (
					<div className="w-full h-full flex flex-col justify-center items-center">
						<p className="text-white text-2xl">
							Select a tool from the left pane
						</p>
					</div>
				)}
			</div>
		</div>
	);
}
