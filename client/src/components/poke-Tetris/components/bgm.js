import React, { useEffect, useState } from "react";
import Hurry_bgm from "../sound/Hurry_bgm.mp3";
import red_bgm from "../sound/poke_bgm.mp3";

export default function PlaySound() {
  const [audio] = useState(new Audio(red_bgm, Hurry_bgm));

  function playAudio() {
    audio.play();
  }

  function pauseAudio() {
    audio.pause();
  }

  function stopAudio() {
    audio.pause(false);
    audio.currentTime = 0;
  }

  useEffect(() => {
    audio.addEventListener("ended", () => {
      stopAudio();
    });
  }, []);

  return (
    <div className="BGM">
      <button onClick={playAudio}>Play</button>
      <button onClick={pauseAudio}>Pause</button>
      <button onClick={stopAudio}>Stop</button>
    </div>
  );
}
