// import './App.css';
import Player from './Player';
import { songsdata } from './audios';
import { useRef, useState, useEffect } from 'react';

const App = () => {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    console.log("isplaying", isplaying)
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [audioElem.current, currentSong, isplaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const currentTime = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": currentTime / duration * 100, "length": duration })

  }


  return (
    <div className="music-app">
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
