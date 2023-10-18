// import Khoj from "../Khoj.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import jwt from "jwt-decode";
import "./navbar.css";
import { BiChevronDown } from "react-icons/bi";
import K from "../assets/K.png";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const cookies = new Cookies();
  let user = null;

  const jwt_token = location?.state?.data?.token;
 
  
  const logout = () => {
    user = null
    cookies.remove(jwt_token);
  };
  let decoded = "";
  if(jwt_token != null){
     decoded = jwt(jwt_token);

    cookies.set("jwt_auth",jwt_token, {
      expires: new Date(decoded.exp * 1000),
    });
    user = decoded.name;
  }

  console.log(decoded.id);
  return (
    <section id="navbar">
      <nav>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={K} alt="" />
        </div>
        <ul>
          <Link to="/worker-reg">{!user?"Register as Profesional":""}</Link>
          <li className="dropdown">
            <button className="dropbtn">
              Category
              <BiChevronDown />
            </button>
            <div className="dropdown-content">
              <li
                onClick={() =>
                  navigate("/list", { state: { cat: "House Cleaning" } })
                }
                className="dropdown-content-a"
              >
                House Cleaning
              </li>
              <li
                onClick={() =>
                  navigate("/list", { state: { cat: "Furniture Cleaning" } })
                }
                className="dropdown-content-a"
              >
                Furniture Cleaning
              </li>
              <li
                onClick={() =>
                  navigate("/list", { state: { cat: "Electonics Work" } })
                }
                className="dropdown-content-a"
              >
                Electonics Work
              </li>
              <li
                onClick={() =>
                  navigate("/list", { state: { cat: "Carpainter" } })
                }
                className="dropdown-content-a"
              >
                Carpainter{" "}
              </li>
              <li
                onClick={() =>
                  navigate("/list", { state: { cat: "Plumber" } })
                }
                className="dropdown-content-a"
              >
                Plumber
              </li>
              <li
                onClick={() =>
                  navigate("/list", { state: { cat: "Grooming Work" } })
                }
                className="dropdown-content-a"
              >
                Grooming Work
              </li>
            </div>
          </li>
          <Link to="/auth" onClick={logout}>{!user?"User Login/Signup":"" + user}</Link>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;

{
  /* <button onClick={logout}>logout</button>
<button onClick={()=>login("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MGRkMzlkZDUzN2ZkMGQxNDA0N2Y1MiIsIm5hbWUiOiJ2aWJoYXYiLCJlbWFpbCI6InZpYmhhd3JhajQ5NEBnbWFpbC5jb20iLCJpYXQiOjE2OTU0OTYwNDgsImV4cCI6MTY5NTUwMzI0OH0.2Qq-_0c0UdZB7mWsJITacFmDnVpTrWp-Z3AaS3048VY")}>login</button> */
}

// const cookies = new  Cookies();

// const [user,setUser] = useState(null);

// const logout =() => {
//   setUser(null);
//   cookies.remove('jwt_auth');
// }
// const login = (jwt_token) => {
//   const decoded = jwt(jwt_token);
//   setUser(decoded);

//   cookies.set('jwt_auth',jwt_token,{
//     expires:new Date(decoded.exp * 1000)
//   })
// }
// console.log( user && user.name);
