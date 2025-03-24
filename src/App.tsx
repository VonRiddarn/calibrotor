import { RouterProvider } from "react-router-dom";
import "./App.scss";
import router from "./router/router";
import { DateProvider } from "./contexts/DateContext/DateProvider";

function App() {
	return (
		<DateProvider>
			<RouterProvider router={router} />
		</DateProvider>
	);
}

export default App;
