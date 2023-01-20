import React from "react";
import { CopyButton } from "./copyButton";

export default function JsonFormatter() {
	const [json, setJson] = React.useState<string>("");
	const [parsed, setParsed] = React.useState<string>("");
	React.useEffect(() => {
		try {
			setParsed(JSON.stringify(JSON.parse(json), null, 4));
		} catch (error) {
			setParsed("");
		}
	}, [json]);
	return (
		<div className="w-full h-[calc(100vh-8rem)] flex flex-row p-8 gap-8 justify-evenly">
			<textarea
				className="w-full h-full bg-stone-900 text-white p-4 rounded-lg"
				placeholder="Paste your JSON here"
				onChange={(e) => {
					setJson(e.target.value);
				}}
			/>
			<div className="relative w-full h-full bg-stone-900 text-white rounded-lg">
				<textarea
					readOnly
					value={parsed}
					className="w-full bg-transparent h-full text-white p-4 rounded-lg"
				>
					{parsed}
				</textarea>
				<CopyButton
					className="absolute top-2 right-2 bg-stone-800 hover:bg-stone-700"
					text={parsed}
				/>
			</div>
		</div>
	);
}
