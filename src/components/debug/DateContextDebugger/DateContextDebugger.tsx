import { useDateContext } from "../../../contexts/DateContext/DateContext";
import { shortDate } from "../../../utils/dateUtils";

const DateContextDebugger = () => {
	const { state, dispatch } = useDateContext();

	return (
		<div>
			<p>{shortDate(state.date)}</p>
			<input
				style={{ color: "black" }}
				type="date"
				name=""
				id=""
				onChange={(e) =>
					dispatch({
						type: "SET",
						payload: e.target.value,
					})
				}
			/>
		</div>
	);
};

export default DateContextDebugger;
