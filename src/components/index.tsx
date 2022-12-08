import { TOOLS_TABS } from "../models/constants";
import Epoch from "./epoch";
import HTMLDisplay from "./htmlDisplay";
import jsonFormatter from "./jsonFormatter";
import JWTDecoder from "./jwtDecoder";

const notFound = () => <div>Not Found</div>;

export const matchTab = (tab: string): JSX.Element => {
	switch (tab) {
		case TOOLS_TABS.UNIX_TIME_CONVERTER:
			return Epoch();
		case TOOLS_TABS.JSON_FORMATTER:
			return jsonFormatter();
		case TOOLS_TABS.JWT_DECODE:
			return JWTDecoder();
		case TOOLS_TABS.HTML_DISPLAY:
			return HTMLDisplay()
		default:
			return notFound();
	}
};
