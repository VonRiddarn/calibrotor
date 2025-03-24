import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Profile from "./pages/Profile";

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
