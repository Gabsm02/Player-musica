import "./App.css";
import Logo from "./assets/logo.svg";
import Profile from "./assets/profile.jpg";
import MusicCard from "./components/Music-Selection/MusicCard";
import Previous from "./assets/previous.svg";
import Play from "./assets/play.svg";
import Pause from "./assets/pause.svg";
import Next from "./assets/next.svg";
import Stop from "./assets/stop.svg";
import React, { useRef, useState, useEffect } from "react";
import { musics } from "./musics.js";

function App() {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [artistName, setArtistName] = useState("");
    const [musicName, setMusicName] = useState("");
    const [currentMusicIndex, setCurrentMusicIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        audioRef.current.addEventListener("timeupdate", () => {
            setCurrentTime(audioRef.current.currentTime);
        });

        audioRef.current.addEventListener("loadedmetadata", () => {
            setDuration(audioRef.current.duration);
        });

        return () => {
            audioRef.current.removeEventListener("timeupdate", () => {});
            audioRef.current.removeEventListener("loadedmetadata", () => {});
        };
    }, []);

    function handlePlayButton(index) {
        const music = musics[index];

        if (!isPlaying || currentMusicIndex !== index) {
            audioRef.current.src = music.url;
            setCurrentMusicIndex(index);
            audioRef.current.currentTime = currentTime; // Define o tempo atual
            audioRef.current.play();
            setIsPlaying(true);
            setArtistName(music.artist);
            setMusicName(music.title);
        }

        setIsPlaying(true);
    }

    function handlePlayCard(index) {
        const music = musics[index];

        audioRef.current.src = music.url;
        setCurrentMusicIndex(index);
        audioRef.current.currentTime = 0; // Define o tempo atual para 0
        audioRef.current.play();
        setIsPlaying(true);
        setArtistName(music.artist);
        setMusicName(music.title);
    }

    function handlePause() {
        audioRef.current.pause();
        setIsPlaying(false);
    }

    function handleStop() {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
    }

    function handleNext() {
        const nextIndex = (currentMusicIndex + 1) % musics.length;
        handlePlayCard(nextIndex);
    }

    function handlePrevious() {
        const previousIndex =
            (currentMusicIndex - 1 + musics.length) % musics.length;
        handlePlayCard(previousIndex);
    }

    function formatTime(timeInSeconds) {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    }

    function handleBarClick(event) {
        const bar = document.querySelector(".bar-container");
        const offsetX = event.pageX - bar.getBoundingClientRect().left;
        const newProgress = offsetX / bar.offsetWidth;
        const newTime = newProgress * audioRef.current.duration;

        audioRef.current.currentTime = newTime;
    }

    return (
        <div className="container">
            <div className="header">
                <img src={Logo} />

                <div className="presentation">
                    <img className="profileImage" src={Profile} />

                    <h2>Bem vindo, Gabriel.</h2>
                </div>
            </div>
            <div className="main">
                <h2>The best playlist</h2>

                <div className="musics-card">
                    {musics.map((music, index) => (
                        <a key={index} onClick={() => handlePlayCard(index)}>
                            <MusicCard
                                className="botao"
                                foto={music.cover}
                                titulo={music.title}
                            />
                        </a>
                    ))}
                </div>
            </div>

            <div className="footer-player">
                <div className="artist">
                    <h3 className="musicName">{musicName}</h3>
                    <p className="artistName">{artistName}</p>
                </div>

                <div className="music-bar">
                    <div className="player-buttons">
                        <img onClick={handleStop} src={Stop} alt="Stop" />

                        <img
                            onClick={handlePrevious}
                            className="previous"
                            src={Previous}
                            alt="Previous"
                        />

                        {isPlaying ? (
                            <img
                                onClick={handlePause}
                                src={Pause}
                                alt="Pause"
                            />
                        ) : (
                            <img
                                onClick={() =>
                                    handlePlayButton(currentMusicIndex)
                                }
                                src={Play}
                                alt="Play"
                            />
                        )}

                        <img
                            className="next"
                            onClick={handleNext}
                            src={Next}
                            alt="Next"
                        />
                    </div>

                    <div className="bar-container" onClick={handleBarClick}>
                        <div
                            className="bar"
                            style={{
                                width: `${(currentTime / duration) * 100}%`,
                            }}
                        ></div>
                        <div
                            className="point"
                            style={{
                                left: `${(currentTime / duration) * 100}%`,
                            }}
                        ></div>
                    </div>

                    <div className="time-container">
                        <p className="start">{formatTime(currentTime)}</p>
                        <p className="end">{formatTime(duration)}</p>
                    </div>
                </div>
            </div>

            <audio ref={audioRef}></audio>
        </div>
    );
}

export default App;
