import { FaUserPlus, FaUserAlt } from "react-icons/fa";
import { TbPokeball } from "react-icons/tb";
import Online from "./Online";
import "./friendlist.css";

export default function FriendList(props) {
  const onlineUsers = props.online;

  const listOfOnlineUsers = onlineUsers.map((user, i) => {
    if(user.name !== props.user.name) {
      return (
        <li>
            <Online className="online-status"/>
            <FaUserAlt size={11} className="icon" key={i}/>
            <div className="online-username">{user.name}</div>
            <div className="online-room">{user.room}</div>
        </li>
      );
    }
      
  });
  console.log(listOfOnlineUsers);
  //map set condition when name===name then exclude it
  //use name here, send in another prop call name
  return (
    <div className="friends-container">
      <div className="myself">
        <TbPokeball size={20} className="user-icon" />
        <div class="myself-name">{props.user.name}</div>
        <div className="online-room">{props.room}</div>
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
