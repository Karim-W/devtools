import React from "react";
import { CopyButton } from "./copyButton";

export default function JWTDecoder() {
	const convertBase64ToString = (base64: string) => {
		const buff = Buffer.from(base64, "base64");
		return buff.toString("ascii");
	};
	const [header, setHeader] = React.useState<string>("");
	const [body, setBody] = React.useState<string>("");
	const [jawt, setJawt] = React.useState<string>("");
	const [signature, setSignature] = React.useState<string>("");
	React.useEffect(() => {
		try {
			const split = jawt.split(".");
			const header = convertBase64ToString(split[0]);
			const body = convertBase64ToString(split[1]);
			setHeader(JSON.stringify(JSON.parse(header), null, 4));
			setBody(JSON.stringify(JSON.parse(body), null, 4));
		} catch (error) {
			setHeader("");
		}
	}, [jawt]);

	const validateJWT = (jawt: string) => { };

	const renderJawtTokenPart = (title: string, payload: string) => {
		return (
			<div className="flex flex-col justify-start items-start gap-4">
				<p className="text-4xl font-light">{title}:</p>
				<div className="relative w-full h-full bg-stone-900 text-white rounded-lg">
					<textarea
						readOnly
						value={payload}
						className="w-full bg-transparent h-full text-white p-4 rounded-lg"
					>
						{payload}
					</textarea>
					<CopyButton
						className="absolute top-2 right-2 bg-stone-800 hover:bg-stone-700"
						text={payload}
					/>
				</div>
			</div>
		);
	};
	return (
		<div className="w-full grid grid-cols-2 grid-rows-2 p-8 gap-8 justify-evenly">
			<div className="flex flex-col justify-start items-start gap-4">
				<p className="text-4xl font-light">Encoded:</p>
				<textarea
					className="w-full h-96 bg-stone-900 text-white p-4 rounded-lg"
					placeholder="Paste your JWT here"
					onChange={(e) => {
						setJawt(e.target.value);
					}}
				/>
			</div>
			{renderJawtTokenPart("Header", header)}
			{renderJawtTokenPart("Body", body)}
			<div className="flex flex-col justify-start items-start gap-4">
				<p className="text-4xl font-light">Signiture:</p>
				<textarea
					className="w-full h-96 bg-stone-900 text-white p-4 rounded-lg"
					placeholder="Paste your JSON here"
					onChange={(e) => {
						setSignature(e.target.value);
					}}
				/>
			</div>
		</div>
	);
}
