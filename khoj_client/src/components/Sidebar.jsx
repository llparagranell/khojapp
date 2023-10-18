import { BiCloset, BiDotsVertical } from "react-icons/bi";

function Sidebar() {
    return ( <div className="sidebar">
       <div className="side-card">
       <label htmlFor="num">Enter Your Number</label>
        <input type="number" id="num" placeholder="Number..."/>
        <button>Submit</button>
       </div>
    </div> );
}

export default Sidebar;