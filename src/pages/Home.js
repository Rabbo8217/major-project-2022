import React from "react";
import "../App.scss";
import International from "./home/International";
import Recent from "./home/Recent";
import Trending from "./home/Trending";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import topNews1 from "../assets/7.jpg";
import topNews2 from "../assets/8.jpg";
import topNews3 from "../assets/9.jpg";
function Home() {
	const cards = [
		{
			img: "../assets/1.jpg",
		},
	];
	const musicCard = (
		<div className="card shadow-sm">
			<img
				src={require("../assets/1.jpg")}
				alt="not_found"
				width="200px"
				height="200px"
			/>
			<div className="card-footer">
				<p className="mb-0 fw-bold">I Love You Mummy</p>
				<p className="mb-0 ">Arebica Luna</p>
			</div>
		</div>
	);
	return (
		<div className="homepage d-flex flex-column align-items-center">
			<div className="top-songs">
				<p className="mb-1 fw-bold">Top Charts</p>
				<div className="top-songs-header">
					<p>Listen top chart</p>
				</div>
				<div className="top-songs-cards d-flex align-items-center justify-content-center gap-3">
					{/* {cards.map((card, index) => (
						<div className="card-img" key={card}>
							<img src={require("../assets/1.jpg")} alt="not_found" />
						</div>
					))} */}
<<<<<<< HEAD
					<div className="card shadow-sm">
						<img
							src={require("../assets/1.jpg")}
							alt="not_found"
							width="200px"
							height="200px"
						/>
						<div className="card-footer">
							<p className="mb-0 fw-bold">XYZ</p>
							<p className="mb-0 ">Arebica Luna</p>
						</div>
					</div>
					<div className="card shadow-sm">
						<img
							src={require("../assets/1.jpg")}
							alt="not_found"
							width="200px"
							height="200px"
						/>
						<div className="card-footer">
							<p className="mb-0 fw-bold">I Love You Mummy</p>
							<p className="mb-0 ">Arebica Luna</p>
						</div>
					</div>
					<div className="card shadow-sm">
						<img
							src={require("../assets/1.jpg")}
							alt="not_found"
							width="200px"
							height="200px"
						/>
						<div className="card-footer">
							<p className="mb-0 fw-bold">I Love You Mummy</p>
							<p className="mb-0 ">Arebica Luna</p>
						</div>
					</div>
					<div className="card shadow-sm">
						<img
							src={require("../assets/1.jpg")}
							alt="not_found"
							width="200px"
							height="200px"
						/>
						<div className="card-footer">
							<p className="mb-0 fw-bold">I Love You Mummy</p>
							<p className="mb-0 ">Arebica Luna</p>
						</div>
					</div>
					<div className="card shadow-sm">
						<img
							src={require("../assets/1.jpg")}
							alt="not_found"
							width="200px"
							height="200px"
						/>
						<div className="card-footer">
							<p className="mb-0 fw-bold">I Love You Mummy</p>
							<p className="mb-0 ">Arebica Luna</p>
						</div>
					</div>
					<div className="card shadow-sm">
						<img
							src={require("../assets/1.jpg")}
							alt="not_found"
							width="200px"
							height="200px"
						/>
						<div className="card-footer">
							<p className="mb-0 fw-bold">I Love You Mummy</p>
							<p className="mb-0 ">Arebica Luna</p>
						</div>
					</div>
					<div className="card shadow-sm">
						<img
							src={require("../assets/1.jpg")}
							alt="not_found"
							width="200px"
							height="200px"
						/>
						<div className="card-footer">
							<p className="mb-0 fw-bold">I Love You Mummy</p>
							<p className="mb-0 ">Arebica Luna</p>
						</div>
					</div>
					<div className="card shadow-sm">
						<img
							src={require("../assets/1.jpg")}
							alt="not_found"
							width="200px"
							height="200px"
						/>
						<div className="card-footer">
							<p className="mb-0 fw-bold">I Love You Mummy</p>
							<p className="mb-0 ">Arebica Luna</p>
						</div>
					</div>
					<div className="card shadow-sm">
						<img
							src={require("../assets/1.jpg")}
							alt="not_found"
							width="200px"
							height="200px"
						/>
						<div className="card-footer">
							<p className="mb-0 fw-bold">I Love You Mummy</p>
							<p className="mb-0 ">Arebica Luna</p>
						</div>
					</div>
					<div className="card shadow-sm">
						<img
							src={require("../assets/1.jpg")}
							alt="not_found"
							width="200px"
							height="200px"
						/>
						<div className="card-footer">
							<p className="mb-0 fw-bold">I Love You Mummy</p>
							<p className="mb-0 ">Arebica Luna</p>
						</div>
					</div>
=======
					{musicCard}
					{musicCard}
					{musicCard}
					{musicCard}
					{musicCard}
					{musicCard}
					{musicCard}
					{musicCard}
					{musicCard}
>>>>>>> 84d73bc96535d1a1ef83483bac67c78d66051352
				</div>
			</div>
			<div className="top-news d-flex">
				<div className="news-cards">
					<div
						className="d-flex shadow-lg"
						id="top-news-1"
						style={{
							backgroundImage: `url(${topNews1})`,
						}}>
						<p className="m-3 text-light align-self-end">
							<p>
								<strong>New Year Party</strong>
							</p>{" "}
							04 : 23 : 14 : 45
							<p>
								<button className="btn-succes px-3 py-2 border border-0 mt-3">
									BUY TICKET
								</button>
							</p>
						</p>
					</div>
					<div
						className="d-flex"
						id="top-news-2"
						style={{
							backgroundImage: `url(${topNews2})`,
						}}>
						<p className="m-3 text-light align-self-end">
							<p>
								<strong>Dance with DJ Nowan</strong>
							</p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
							consectetur, ex explicabo
						</p>
						.
					</div>
					<div
						className="d-flex"
						id="top-news-3"
						style={{
							backgroundImage: `url(${topNews3})`,
						}}>
						<p className="m-3 text-light align-self-end ">
							<p>
								<strong>Move You's Legs</strong>
							</p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
							consectetur, ex explicabo.
						</p>
					</div>
				</div>
				<section
					className="top-news-router"
					style={{
						minWidth: "30vw",
					}}>
					<nav className="d-flex gap-3">
						<Link
							to="/recent"
							className="route-element text-decoration-none text-dark px-1">
							Recent
						</Link>
						<Link
							to="/trending"
							className="route-element text-decoration-none text-dark px-1">
							Trending
						</Link>
						<Link
							to="/international"
							className="route-element text-decoration-none text-dark px-1">
							International
						</Link>
					</nav>
					<Outlet></Outlet>
				</section>

				<div className="trending-section"></div>
				{/* <div className="top-news-card d-flex align-items-center justify-content-center gap-3">
					{musicCard}
					{musicCard}
					{musicCard}
					{musicCard}
					{musicCard}
					{musicCard}
					{musicCard}
					{musicCard}
					{musicCard}
				</div> */}
			</div>
			<div className="listening-stats">{/* include router here */}</div>
			<div className="new-releases d-flex align-items-center justify-content-center gap-3">
				{musicCard}
				{musicCard}
				{musicCard}
				{musicCard}
				{musicCard}
				{musicCard}
				{musicCard}
				{musicCard}
				{musicCard}
			</div>
			<div className="featured-artists">
				<div className="featured-artists-header">
					<div className="featured-artists-cards d-flex align-items-center justify-content-center gap-3">
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
					</div>
				</div>
			</div>
			<div className="your-playlist">
				<div className="your-playlist-header">
					<div className="your-playlist-cards d-flex align-items-center justify-content-center gap-3">
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
					</div>
				</div>
			</div>
			<div className="retro-classic">
				<div className="retro-classic-header">
					<div className="retro-classic-cards d-flex align-items-center justify-content-center gap-3">
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
					</div>
				</div>
			</div>
			<div className="radio">
				<div className="radio-header">
					<div className="radio-cards d-flex align-items-center justify-content-center gap-3">
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
					</div>
				</div>
			</div>
			<div className="genres">
				<div className="genres-header">
					<div className="genres-cards d-flex align-items-center justify-content-center gap-3">
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
						{musicCard}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
