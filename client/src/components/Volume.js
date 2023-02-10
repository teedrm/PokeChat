import React from "react";
import "./volume.css";

export default function Volume() {
  return (
    <div className="volume-div">
      {/* watch https://www.youtube.com/watch?v=ajVcLGEw8Xw 
      hrome-extension://mefhakmgclhhfbdadeojlkbllmecialg/public/index.html
      */}
      <input
        type="range"
        orient="vertical"
        min={0}
        max={100}
        // onMouseUp = {(e => setVolume(e))}
      />
    </div>
  );
}
