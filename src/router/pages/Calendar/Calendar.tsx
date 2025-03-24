import DateContextDebugger from "../../../components/debug/DateContextDebugger/DateContextDebugger";
import CalendarHeader from "./components/CalendarHeader/CalendarHeader";

const Calendar = () => {
	return (
		<>
			<CalendarHeader />
			<DateContextDebugger />
		</>
	);
};

export default Calendar;
