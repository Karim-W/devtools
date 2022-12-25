import React from "react";

// pass children as a prop
export interface ICopiedTextBoxProps {
	className?: string;
	text: string;
}
export default function CopiedTextBox({
	text,
	className,
}: ICopiedTextBoxProps) {
	const [bg, setBg] = React.useState<string>("bg-stone-800");
	const handleClick = () => {
		console.log("copying");
		navigator.clipboard.writeText(text);
		setBg("bg-green-500");
		setTimeout(() => {
			setBg("bg-stone-800");
		}, 300);
	};
	return (
		<div
			className={`flex flex-row justify-between
			items-center p-2 bg-stone-900 rounded-md text-stone-200 gap-4 ${className ?? ""
				} flex-wrap break-all`}
		>
			{text}
			<button
				className={`ease-in-out transition-colors text-white rounded-md p-2 hover:scale-95 ${bg}`}
				onClick={handleClick}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1rem"
					height="1rem"
					fill="currentColor"
					viewBox="0 0 16 16"
				>
					<path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
					<path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
				</svg>
			</button>
		</div>
	);
}
