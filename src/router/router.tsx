import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Calendar from "./pages/Calendar/Calendar";
import Profile from "./pages/Profile";

// TODO: Add a route for day visualizer or something
// That's the object in charge of displaying a day graph / log etc.
// Home will automatically just use this visualizer with the last index of the dict.
// When viewing dates in the calendar though, this date will be used as a pointer.

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "calendar",
				element: <Calendar />,
			},
			{
				path: "profile",
				element: <Profile />,
			},
			{
				path: "about",
				element: <About />,
			},
		],
	},
]);

export default router;
