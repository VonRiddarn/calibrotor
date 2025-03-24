import { createContext, useContext } from "react";
import { DateContextType } from "./types";

export const DateContext = createContext<DateContextType | null>(null);

export const useDateContext = () =>
	useContext(DateContext) ??
	(() => {
		throw new Error("Context must be used within its provider!");
	})();
