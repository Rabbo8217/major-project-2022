import React, { useState } from "react";
import { routes } from "./SidebarData";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "../App.scss";

function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const inputAnimation = {
		hidden: {
			width: 0,
		},
		show: {
			width: "200px",
			transition: {
				duration: 0.2,
			},
		},
	};
	return (
		<motion.div
			animate={{ width: isOpen ? "200px" : "55px" }}
			className="sidebar shadow-sm">
			<div className="sidebar-header">
				<button className="hamb-btn">
					<GiHamburgerMenu onClick={toggle} />
				</button>
				<div className="logo d-flex align-items-baseline">
					<AnimatePresence>
						<h2 className="sidebar-logo">
							<RiNeteaseCloudMusicFill />
						</h2>
						{isOpen && (
							<motion.h3
								initial="hidden"
								animate="show"
								exit="hidden"
								variants={inputAnimation}>
								Muser
							</motion.h3>
						)}
					</AnimatePresence>
				</div>
			</div>
			<div className="routes">
				{routes.map((route) => {
					if (route.title)
						return isOpen && <div className="list-title ">{route.text}</div>;
					else
						return (
							<NavLink to={route.path} key={route.name} className="list-item">
								<div className="icon">{route.icon}</div>
								{isOpen && <div className="link-text">{route.name}</div>}
							</NavLink>
						);
				})}
			</div>
		</motion.div>
	);
}

export default Sidebar;
