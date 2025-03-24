import { Dispatch } from "react";

export type DateState = {
	date: Date;
};

export type DateContextType = {
	state: DateState;
	dispatch: Dispatch<DateReducerAction>;
};

export type DateReducerAction = { type: "SET"; payload: string } | { type: "RESET" };
