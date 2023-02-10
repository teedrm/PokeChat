import { FaUserPlus, FaUserAlt } from "react-icons/fa";
import "./friendlist.css";

export default function FriendList() {
  return (
    <div className="friends-container">
      <div className="myself">
        <FaUserAlt size={12} className="icon" />
        <div>User</div>
      </div>
      <div className="add-friend">
        <input placeholder="username" />
        <button>
          <FaUserPlus size={15} />
        </button>
      </div>
      <ul>
        <li>
          <FaUserAlt size={11} className="icon" />
          <div>Friend1</div>
        </li>
        <li>
          <FaUserAlt size={11} className="icon" />
          <div>Friend2</div>
        </li>
      </ul>
    </div>
  );
}
