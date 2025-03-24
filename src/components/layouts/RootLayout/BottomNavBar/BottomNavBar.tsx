import "./BottomNavBar.scss";
import { useState } from "react";
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
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={isOpen ? "BottomNavBar active" : "BottomNavBar"}>
			<button onClick={() => setIsOpen(!isOpen)}>
				<hr />
				{isOpen ? "▼ CLOSE ▼" : "▲ OPEN ▲"}
			</button>
			<nav>
				<ul>
					{items.map((item) => (
						<li key={item.label}>
							<NavLink
								to={item.to}
								className={getLinkClassName}
								tabIndex={(!isOpen && -1) as number}
							>
								{item.label}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
};

export default BottomNavBar;
