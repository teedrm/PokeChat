import React, { useEffect, useState } from "react";
import Hurry_bgm from "./sound/Hurry_bgm.mp3";

export default function PlaySound() {
  const [audio, setAudio] = useState(new Audio(Hurry_bgm));
  const [isPlaying, setIsPlaying] = useState(false);

  function playAudio() {
    audio.play();
    setIsPlaying(true);
  }

  function pauseAudio() {
    audio.pause();
    setIsPlaying(false);
  }

  function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  }

  function toggleAudio() {
    if (isPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  }

  useEffect(() => {
    audio.addEventListener("ended", () => {
      stopAudio();
    });
  }, []);

  return (
    <div className="BGM">
      <button className={`play-pause ${isPlaying ? 'pause' : 'play'}`} onClick={toggleAudio}>
        <span>{isPlaying ? 'Pause' : 'Play'}</span>
      </button>
      {isPlaying && (
        <button className="stop" onClick={stopAudio}>
          <span>Stop</span>
        </button>
      )}
    </div>
  );
}

