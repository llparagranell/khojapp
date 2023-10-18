import { useLocation } from "react-router-dom";
import "./list.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CardList from "../components/CardList";
// http://localhost:3000/worker/getworker
function List() {
  const locaition = useLocation();
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/worker/getworker")
      .then((res) => setData(res.data));
  }, []);

  return (
    <>
      {" "}
      <div className="list">
        <h1>
          Searching for "{locaition.state.cat.toUpperCase()}" in your area.
        </h1>
      </div>
     <div id="list-part">
     <div className="dis filter">
        <h1 className="filter-head">Filter By:</h1>
        <div className="filter-div">
          <h1 className="filter-h">Your budget (per day)</h1>
          <ul className="filter-ul">
            <input type="checkbox" />
            <label>₹ 0 - ₹ 500</label>
            <br />
            <input type="checkbox" />
            <label>₹ 500 - ₹ 1000</label>
            <br />
            <input type="checkbox" />
            <label>₹ 1000 - ₹ 1500</label>
            <br />
            <input type="checkbox" />
            <label>₹ 1500 - ₹ 2000</label>
            <br />
            <input type="checkbox" />
            <label>₹ 2000 +</label>
            <br />
          </ul>
        </div>
        <div className="filter-div">
          <h1 className="filter-h">Work rating</h1>
          <p className="filter-p">Includes stars and other ratings</p>
          <ul className="filter-ul">
            <input type="checkbox" />
            <label>2 stars</label>
            <br />
            <input type="checkbox" />
            <label>3 stars</label>
            <br />
            <input type="checkbox" />
            <label>4 stars</label>
            <br />
            <input type="checkbox" />
            <label>Unrated</label>
            <br />
          </ul>
        </div>
        <div className="filter-div">
          <h1 className="filter-h">Cancellation policy</h1>
          <ul className="filter-ul">
            <input type="checkbox" />
            <label>Free cancellation</label>
            <br />
            <input type="checkbox" />
            <label>Book without credit card</label>
            <br />
          </ul>
        </div>
        
      </div>{" "}
      <div className="list-div">
          {data &&
            data
              .filter(
                (e) =>
                  e.category.toLowerCase() === locaition.state.cat.toLowerCase()
              )
              .map((filteredName) => (
                <div>
                  {" "}
                  <CardList
                    name={filteredName.name}
                    email={filteredName.email}
                    city={filteredName.city}
                    number={filteredName.number}
                    category={filteredName.category}
                    gender={filteredName.gender}
                    state={filteredName.state}
                  />
                </div>
              ))}
        </div>
     </div>
    </>
  );
}

export default List;
