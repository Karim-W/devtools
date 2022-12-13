import { TOOLS_TABS } from "../models/constants";
import Epoch from "./epoch";
import HTMLDisplay from "./htmlDisplay";
import JsonFormatter from "./jsonFormatter";
import JWTDecoder from "./jwtDecoder";

function NotFound() {
	return <div>Not Found</div>;
}

export function MatchTab(tab: string): JSX.Element {
	switch (tab) {
		case TOOLS_TABS.UNIX_TIME_CONVERTER:
			return Epoch();
		case TOOLS_TABS.JSON_FORMATTER:
			return JsonFormatter();
		case TOOLS_TABS.JWT_DECODE:
			console.log("JWT_DECODE");
			return JWTDecoder();
		case TOOLS_TABS.HTML_DISPLAY:
			return HTMLDisplay();
	}
	return NotFound();
}
