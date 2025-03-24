import { Outlet } from "react-router-dom";
import BottomNavBar from "./BottomNavBar/BottomNavBar";

const RootLayout = () => {
	return (
		<>
			<Outlet />
			<BottomNavBar />
		</>
	);
};

export default RootLayout;
