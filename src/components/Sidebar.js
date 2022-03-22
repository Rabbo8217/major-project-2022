import React, { useState } from "react";
import { routes } from "./SidebarData";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import "../css/sidebar.css";
function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const inputAnimation = {
		hidden: {
			width: 0,
		},
		show: {
			width: "100px",
			transition: {
				duration: 0.2,
			},
		},
	};
	return (
		<motion.div
			animate={{ width: isOpen ? "180px" : "55px" }}
			className="sidebar shadow">
			<button className="hamb-btn">
				<GiHamburgerMenu onClick={toggle} />
			</button>
			<div className="sidebar-header">
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
			<div className="routes">
				{routes.map((route) => (
					<NavLink to={route.path} key={route.name} className="list-item">
						<div className="icon">{route.icon}</div>
						{isOpen && <div className="link-text">{route.name}</div>}
					</NavLink>
				))}
			</div>
			{/* <button className="px-2 py-1 border border-0 btn-danger rounded-3 shadow w-75 add-music-btn">
					ADD MUSIC
				</button> */}
		</motion.div>
	);
}

export default Sidebar;
