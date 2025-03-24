import { NavLink } from "react-router-dom";

type NavLinkItem = {
	to: string;
	label: string;
};

const items: NavLinkItem[] = [
	{
		to: "/",
		label: "HOME",
	},
	{
		to: "calendar",
		label: "CALENDAR",
	},
	{
		to: "profile",
		label: "PROFILE",
	},
	{
		to: "about",
		label: "ABOUT",
	},
];

const getLinkClassName = ({ isActive }: { isActive: boolean }) => (isActive ? "nav-link active" : "nav-link");

const BottomNavBar = () => {
	return (
		<nav>
			<ul>
				{items.map((item) => (
					<li key={item.label}>
						<NavLink to={item.to} className={getLinkClassName}>
							{item.label}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default BottomNavBar;
