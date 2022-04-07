import React from "react";
import { BsThreeDots } from "react-icons/bs";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/4.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/6.jpg";
function Recent() {
	const music = [
		{
			songName: "I Love You Mummy",
			artist: "Arebica Luna",
			img: img1,
		},
		{
			songName: "Shack your butty",
			artist: "Gerrina Linda",
			img: img2,
		},
		{
			songName: "Do it your way(Female)",
			artist: "Zunira Willy & Nutty Nina",
			img: img3,
		},
		{
			songName: "Say yes",
			artist: "Johnny Marro",
			img: img4,
		},
		{
			songName: "Where is your letter",
			artist: "Jina Moore & Lenisa Gory",
			img: img5,
		},
		{
			songName: "Deep inside",
			artist: "Pimila Holliwy",
			img: img6,
		},
	];
	return (
		<div>
			<ul className="list-unstyled my-3 ">
				{music.map((list_item, index) => (
					<li className="d-flex justify-content-between align-items-start ">
						<p className="d-flex align-items-center gap-2">
							<img
								src={list_item.img}
								alt=""
								width="40px"
								height="40px"
								className="m-1 rounded-3"
							/>
							<div>
								<div>{list_item.songName}</div>
								<div>{list_item.artist}</div>
							</div>
						</p>
						<BsThreeDots className="mt-2" />
					</li>
				))}
			</ul>
		</div>
	);
}

export default Recent;
