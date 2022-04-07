import React from "react";
import { BiStation, BiHome, BiHistory, BiHeart } from "react-icons/bi";
import { BsCalendarEvent } from "react-icons/bs";
import { IoDiamondOutline } from "react-icons/io5";
import { IoMdAnalytics } from "react-icons/io";
import { BsMic } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

export const routes = [
	{
		title: true,
		text: "Browse Music",
	},
	{
		title: false,
		path: "/",
		name: "Home",
		icon: <BiHome />,
	},
	{
		title: false,
		path: "/genres",
		name: "Genres",
		icon: <IoDiamondOutline />,
	},
	{
		title: false,
		path: "/artists",
		name: "Artists",
		icon: <BsMic />,
	},
	{
		title: false,
		path: "/stations",
		name: "Stations",
		icon: <BiStation />,
	},
	{
		title: true,
		text: "Your Music",
	},
	{
		title: false,
		path: "/analytics",
		name: "Analytics",
		icon: <IoMdAnalytics />,
	},
	{
		title: false,
		path: "/history",
		name: "History",
		icon: <BiHistory />,
	},
	{
		title: false,
		path: "/favorites",
		name: "Favorites",
		icon: <BiHeart />,
	},
	{
		title: true,
		text: "Events",
	},
	{
		title: false,
		path: "/events",
		name: "Event",
		icon: <BsCalendarEvent />,
	},
	{
		title: false,
		path: "/add-events",
		name: "Add Event",
		icon: <FiEdit />,
	},
];
