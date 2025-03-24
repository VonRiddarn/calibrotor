import "./BottomNavBar.scss";
import { useRef, useState, useCallback } from "react";
import { NavLink } from "react-router-dom";

type NavLinkItem = {
	to: string;
	label: string;
};

const items: NavLinkItem[] = [
	{ to: "/", label: "HOME" },
	{ to: "calendar", label: "CALENDAR" },
	{ to: "profile", label: "PROFILE" },
	{ to: "about", label: "ABOUT" },
];

const getLinkClassName = ({ isActive }: { isActive: boolean }) => (isActive ? "nav-link active" : "nav-link");

const BottomNavBar = () => {
	const [isOpen, setIsOpenInternal] = useState(false);
	const deadZone = 42;
	const dragging = useRef(false);
	const startY = useRef(0);
	const dead = useRef(false);

	const setIsOpen = (value: React.SetStateAction<boolean>) => {
		if (dead.current) return;

		setIsOpenInternal(value);
		dead.current = true;
	};

	const handleOnClick = () => {
		if (dead.current) return;
		setIsOpen(!isOpen);
	};

	const handlePointerDown = (e: React.PointerEvent) => {
		const pageY = e.pageY;

		dragging.current = true;
		startY.current = pageY;
		dead.current = false;
		document.addEventListener("pointermove", handlePointerMove);
		document.addEventListener("pointerup", handlePointerUp);
	};

	const handlePointerMove = useCallback((e: PointerEvent) => {
		if (!dragging.current) return;

		const deltaY = e.pageY - startY.current;

		if (deltaY < -deadZone) {
			setIsOpen(true);
			stopDrag();
		} else if (deltaY > deadZone) {
			setIsOpen(false);
			stopDrag();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handlePointerUp = useCallback(() => {
		stopDrag();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const stopDrag = useCallback(() => {
		dragging.current = false;
		document.removeEventListener("pointermove", handlePointerMove);
		document.removeEventListener("pointerup", handlePointerUp);
	}, [handlePointerMove, handlePointerUp]);

	return (
		<div className={`BottomNavBar ${isOpen ? "active" : ""}`}>
			<button
				onClick={handleOnClick}
				onPointerDown={handlePointerDown}
				aria-label={isOpen ? "Close navigation" : "Open navigation"}
			>
				<hr />
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
						fill="currentColor"
					/>
				</svg>
			</button>

			<nav>
				<ul>
					{items.map((item) => (
						<li key={item.label}>
							<NavLink
								to={item.to}
								className={getLinkClassName}
								tabIndex={isOpen ? 0 : -1} // Only focusable when open
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
