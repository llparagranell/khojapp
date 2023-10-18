import { useNavigate } from "react-router-dom";

function Repair() {

    const navigate = useNavigate();

    return ( <section id="clean">
    <h1>Home Repairs</h1>
    <div className="cleaning">
        <div className="clean-card" onClick={()=> navigate('/list',{state:{cat:"Carpainters"}})}>
            <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
            <p>Carpainters</p>
        </div>
        <div className="clean-card" onClick={()=> navigate('/list',{state:{cat:"Electonics Work"}})}>
            <img src="https://images.unsplash.com/photo-1553873002-785d775854c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
            <p>Electronics</p>
        </div>
        <div className="clean-card" onClick={()=> navigate('/list',{state:{cat:"Plumber"}})}>
            <img src="https://plus.unsplash.com/premium_photo-1663013675008-bd5a7898ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
            <p>Plumber</p>
        </div>
    </div>
</section> );
}

export default Repair;