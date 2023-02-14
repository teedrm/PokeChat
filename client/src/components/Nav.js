import { React } from "react";
import "./navbar.css";
import { FaHome, FaRegSun, FaVolumeUp, FaUserFriends } from "react-icons/fa";

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
          {/* <li>
            <FaVolumeUp
              size={18}
              volume={props.volume}
              onClick={props.onVolume}
            />
          </li> */}
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
