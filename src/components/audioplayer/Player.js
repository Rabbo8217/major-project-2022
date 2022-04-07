import React, { useState, useRef } from "react";
import "../../App.scss";
import song from "../../assets/song.mp3";
import AudioSlider from "./AudioSlider";
import PlayerControls from "./PlayerControls";
import { FiRepeat, FiMoreVertical } from "react-icons/fi";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import {
	BsPlayCircleFill,
	BsPauseCircleFill,
	BsShuffle,
	BsFillVolumeMuteFill,
} from "react-icons/bs";
import { RiMenuAddLine } from "react-icons/ri";
function Player() {
	const [percentage, setPercentage] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const audioRef = useRef();
	const play = () => {
		const audio = audioRef.current;
		audio.volume = 0.01;
		if (!isPlaying) {
			setIsPlaying(true);
			audio.play();
		} else {
			setIsPlaying(false);
			audio.pause();
		}
	};

	function secondsToHms(seconds) {
		if (!seconds) return "00m 00s";

		let duration = seconds;
		let hours = duration / 3600;
		duration = duration % 3600;

		let min = parseInt(duration / 60);
		duration = duration % 60;

		let sec = parseInt(duration);

		if (sec < 10) {
			sec = `0${sec}`;
		}
		if (min < 10) {
			min = `0${min}`;
		}

		if (parseInt(hours, 10) > 0) {
			return `${parseInt(hours, 10)}h ${min}m ${sec}s`;
		} else if (min == 0) {
			return `00m ${sec}s`;
		} else {
			return `${min}m ${sec}s`;
		}
	}
	const getCurrDuration = (e) => {
		const percent = (
			(e.currentTarget.currentTime / e.currentTarget.duration) *
			100
		).toFixed(2);
		const time = e.currentTarget.currentTime;

		setPercentage(+percent);
		setCurrentTime(time.toFixed(2));
	};
	const onChange = (e) => {
		const audio = audioRef.current;
		audio.currentTime = (audio.duration / 100) * e.target.value;
		setPercentage(e.target.value);
	};

	return (
		<div className="player d-flex align-items-center justify-content-between shadow">
			<section className="music-info d-flex align-items-center">
				<img
					src="https://i.pinimg.com/originals/04/ce/b4/04ceb49f18d559107d625d823b26d683.jpg"
					alt="song_img"
					height="80px"
					width="80px"
					className="m-2"
				/>
				<article className="d-inline-flex flex-column px-3">
					<span className="title mx-2">I Love You Mummy</span>
					<span className="artist mx-2">Arebica Luna</span>
				</article>
			</section>
			<section className="player-controls d-flex flex-column align-items-center justify-content-start">
				<AudioSlider onChange={onChange} percentage={percentage} />
				<div className="main-controls d-flex  align-items-center gap-3 p-2">
					<button className="repeat border border-0 fs-4 px-3 pb-2 pt-1 rounded-3">
						<FiRepeat />
					</button>
					<button className="prev border border-0 fs-4 px-3 pb-2 pt-1 rounded-3">
						<BiSkipPrevious />
					</button>

					<audio
						ref={audioRef}
						src={song}
						onLoadedData={(e) => {
							// console.log(e.currentTarget.duration);
							setDuration(e.currentTarget.setDuration.toFixed(2));
						}}
						onTimeUpdate={getCurrDuration}></audio>
					<button
						className="border border-0 fs-3 px-3 py-1 rounded-3"
						onClick={play}>
						{isPlaying ? <BsPauseCircleFill /> : <BsPlayCircleFill />}
					</button>
					<button className="next border border-0 fs-4 px-3 pb-2 pt-1 rounded-3">
						<BiSkipNext />
					</button>
					<button className="shuffle border border-0 fs-4 px-3 pb-2 pt-1 rounded-3">
						<BsShuffle />
					</button>
				</div>
			</section>
			<section className="player-info d-flex align-items-center gap-3">
				<span className="timer">
					{secondsToHms(currentTime)}/{secondsToHms(duration)}
				</span>
				<button className="volume border border-0 fs-4 px-3 pb-2 pt-1 rounded-3">
					<BsFillVolumeMuteFill />
				</button>
				<button className="options border border-0 fs-4 px-3 pb-2 pt-1 rounded-3">
					<FiMoreVertical />
				</button>
				<button className="playlist border border-0 fs-4 px-3 pb-2 pt-1 rounded-3">
					<RiMenuAddLine />
				</button>
			</section>
		</div>
	);
}

export default Player;
