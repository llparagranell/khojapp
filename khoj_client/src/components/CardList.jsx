import "./cardlist.css";
import { FaUser } from "react-icons/fa";
import {AiTwotoneStar} from 'react-icons/ai'

function CardList(props) {
  return (
    <div className="cardlist">
      <div className="user-icon">
        <li>
          <FaUser />
        </li>
      </div>
      <div className="user-text">
      <div style={{display:"flex",justifyContent:"space-between"}}>
      <div className="user-details-name">
      <ul className="user-name">
        <li>{props.name.toUpperCase()}</li>
      </ul>
      <ul className="user-location">
          <li>{props.city.charAt(0).toUpperCase() + props.city.slice(1)}, </li>
          <li>{props.state.charAt(0).toUpperCase() + props.state.slice(1)}</li>
        </ul>
      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <AiTwotoneStar style={{fontSize:"25px"}}/>
        <AiTwotoneStar style={{fontSize:"25px"}}/>
        <AiTwotoneStar style={{fontSize:"25px"}}/>
        <AiTwotoneStar style={{color:"grey",fontSize:"25px"}}/>
        <AiTwotoneStar style={{color:"grey",fontSize:"25px"}}/>
      </div>
      </div>
      <ul className="user-details">
        <li>Email : <span>{props.email}</span></li>
        <li>Number : <span>{props.number}</span></li>
        <li>Gender : <span>{props.gender.charAt(0).toUpperCase() + props.gender.slice(1)}</span></li>
        <li>Category : <span>{props.category.charAt(0).toUpperCase() + props.category.slice(1)}</span></li>
      </ul>
      <div className="btn">
      <button className="addtocart" onClick={()=> alert("Booked Successfully!!!")}>Book Now</button>
      <button className="addtocart red" onClick={()=> alert("Reported Successfully!!!")}>Report</button>
      </div>
      </div>
    </div>
  );
}

export default CardList;
