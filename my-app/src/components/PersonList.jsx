import { useState } from "react";
import "./PersonList.css";
import User from "./User";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

function PersonList({data, deleteUser}) {
  const [show, setShow] = useState(true);
  return (
    <div className="person-list-container">
      <div className="person-list-header">
        <div className="title-group">
          <h2>จำนวนประชากร</h2>
          <span className="badge">{data.length} คน</span>
        </div>
        <button 
          className={`toggle-btn ${show ? 'active' : ''}`} 
          onClick={() => setShow(!show)}
          title={show ? "ซ่อน" : "แสดง"}
        >
          {show ? <FaRegEye size={22}/> : <FaRegEyeSlash size={22}/>}
        </button>
      </div>
      
      <div className={`list-wrapper ${show ? 'open' : 'closed'}`}>
        <ul className="user-list">
          {data.map((item) => (
            <User key={item.id} item={item} deleteUser={deleteUser}/>
          ))}
        </ul>
        {data.length === 0 && (
          <div className="empty-state">
            <p>ไม่พบข้อมูลประชากร</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonList;
