import { FaUserPlus, FaUserAlt } from "react-icons/fa";
import { TbPokeball } from "react-icons/tb";
import Online from "./Online";
import "./friendlist.css";

export default function FriendList(props) {
  const onlineUsers = props.online;
  const currentUser = props.name;


  const listOfOnlineUsers = onlineUsers.map((user, i) => {
    if(user !== currentUser) {
      return (
        <li>
            <Online />
            <FaUserAlt size={11} className="icon" key={i}/>
            <div>{user}</div>
        </li>
      );
    }
  });
  //map set condition when name===name then exclude it
  //use name here, send in another prop call name
  return (
    <div className="friends-container">
      <div className="myself">
        <TbPokeball size={20} className="icon" />
        <div class="myself-name">{currentUser}</div>
      </div>
      <div class="divider">
        {/* <input placeholder="username" />
        <button>
          <FaUserPlus size={15} />
        </button> */}
      </div>
      <ul>
       {listOfOnlineUsers}
      </ul>
    </div>
  );
}
