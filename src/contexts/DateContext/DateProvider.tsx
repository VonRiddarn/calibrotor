import { useReducer } from "react";
import { DateReducerAction, DateState } from "./types";
import { DateContext } from "./DateContext";

const dateReducer = (state: DateState, action: DateReducerAction) => {
	switch (action.type) {
		case "SET":
			return { date: new Date(action.payload) };
		case "RESET":
			return { date: new Date() };
		default:
			return state;
	}
};

export const DateProvider = ({ children }: { children: React.ReactNode }) => {
	const [state, dispatch] = useReducer(dateReducer, { date: new Date() });

	return <DateContext.Provider value={{ state, dispatch }}>{children}</DateContext.Provider>;
};
