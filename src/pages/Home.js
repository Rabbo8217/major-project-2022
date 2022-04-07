import React from "react";
import "../App.scss";

function Home() {
	const cards = [
		{
			img: "../assets/1.jpg",
		},
	];
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
				</div>
			</div>
			<div className="top-news">
				<div className="top-news-card d-flex align-items-center justify-content-center gap-3">
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
				</div>
			</div>
			<div className="listening-stats">{/* include router here */}</div>
			<div className="new-releases d-flex align-items-center justify-content-center gap-3">
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
			</div>
			<div className="featured-artists">
				<div className="featured-artists-header">
					<div className="featured-artists-cards d-flex align-items-center justify-content-center gap-3">
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
					</div>
				</div>
			</div>
			<div className="your-playlist">
				<div className="your-playlist-header">
					<div className="your-playlist-cards d-flex align-items-center justify-content-center gap-3">
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
					</div>
				</div>
			</div>
			<div className="retro-classic">
				<div className="retro-classic-header">
					<div className="retro-classic-cards d-flex align-items-center justify-content-center gap-3">
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
					</div>
				</div>
			</div>
			<div className="radio">
				<div className="radio-header">
					<div className="radio-cards d-flex align-items-center justify-content-center gap-3">
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
					</div>
				</div>
			</div>
			<div className="genres">
				<div className="genres-header">
					<div className="genres-cards d-flex align-items-center justify-content-center gap-3">
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
