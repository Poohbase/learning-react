import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
import { FaTrash } from "react-icons/fa";

export default function User({item, deleteUser}) {
  const isMale = item.gender === "ชาย";

  return (
    <li className={`user-card ${isMale ? 'male' : 'female'}`}>
      <div className="user-info">
        <div className="avatar-wrapper">
          <img src={isMale ? boy : girl} alt={item.gender} className="avatar" />
        </div>
        <div className="details">
          <h3 className="user-name">{item.name}</h3>
          <span className="gender-badge">{item.gender}</span>
        </div>
      </div>
      <div className="control">
        <button 
          className="delete-btn" 
          onClick={() => deleteUser(item.id)} 
          title="ลบข้อมูล"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
}
