import { CiLocationOn } from "react-icons/ci";
import "./home.css";
import Cleaning from "../components/Cleaning";
import Best from "../components/Best";
import Repair from "../components/repair";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
const navigate = useNavigate();
  const [ cat, setCat ] = useState('');

  const handler = () => {
    navigate("/list", { state: { cat: cat } })
  }
  return (
    <>
      <section id="home">
        <header>
        
         <div className="heading">
            <h1>Home Services on Demand</h1>
          </div>
          <div className="search">
            <button>
              location{" "}
              <li>
                <CiLocationOn />
              </li>
            </button>
            <form onSubmit={handler} style={{width:"100%"}}>
            <input type="text" placeholder="search for service..." onChange={(e)=>setCat(e.target.value)} />
            </form>

          </div>
          <p className="header-p"><li onClick={()=> navigate("/list", { state: { cat: "plumber" } })} className="header-p-a">plumber</li>, <li className="header-p-a" onClick={()=> navigate("/list", { state: { cat: "carpainter" } })} >carpainter</li>, etc.</p>
        </header>
      </section>
      {/* <Card /> */}

      <Cleaning />
      <Best />
      <Repair />
    </>
  );
}

export default Home;
