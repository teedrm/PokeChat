import { React } from "react";
import "./navbar.css";
import { FaHome, FaRegSun, FaMusic, FaUserFriends, FaCamera } from "react-icons/fa";

export default function Navbar(props) {
  // const [state, setState] = useState({
  //   friends: false
  // });

  return (
    <nav className="navbar">
      <div className="nav-elements">
        <ul>
          <li>
            <FaHome 
              size={18}
              onClick={props.onHome}
             />
          </li>
          <li>
            <FaUserFriends
              size={18}
              friends={props.friends}
              onClick={props.onFriends}
            />
          </li>
          <li>
            <FaMusic
              size={16}
              music={props.music}
              onClick={props.onMusic}
            />
          </li>
          <li>
            <FaCamera
             size={17}
             camera={props.camera}
             onClick={props.onCamera}
             />
          </li>
          <li>
            <FaRegSun
              size={18}
              settings={props.settings}
              onClick={props.onSettings}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
