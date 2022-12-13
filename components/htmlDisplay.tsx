import React from "react";

export default function HTMLDisplay() {
	const [html, setHtml] = React.useState<string>("");
	return (
		<div className="w-full h-full flex flex-row gap-4 p-4">
			<div className="w-1/2 h-full flex flex-col gap-4">
				<p className="text-white">HTML</p>
				<textarea
					className="w-full h-full bg-stone-900 text-white p-4 rounded-lg"
					placeholder="Paste your HTML here"
					onChange={(e) => {
						setHtml(e.target.value);
					}}
				/>
			</div>
			<div className="w-1/2 h-full flex flex-col gap-4">
				<p className="text-white">Result</p>
				<div dangerouslySetInnerHTML={{ __html: html }} />
			</div>
		</div>
	);
}
