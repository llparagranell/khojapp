import { useNavigate } from "react-router-dom";

function Best() {
    const navigate = useNavigate();

    return (  <section id="clean">
    <h1>Best Offers</h1>
    <p className="best">Hygenic & single-use products | Low-contact service</p>
    <div className="cleaning">
        <div className="clean-card" onClick={()=> navigate('/list',{state:{cat:"salon"}})}>
            <img src="https://plus.unsplash.com/premium_photo-1661645807231-2635324e8833?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
            <p>Salon Prime for kids and Men</p>
            <li>Haircut at 199</li>
        </div>
        <div className="clean-card" onClick={()=> navigate('/list',{state:{cat:"massage"}})}>
            <img src="https://plus.unsplash.com/premium_photo-1661274213751-0ccaaffdecac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
            <p>Massage</p>
            <li>Starts at 199</li>
        </div>
        <div className="clean-card" onClick={()=> navigate('/list',{state:{cat:"painting"}})}>
            <img src="https://plus.unsplash.com/premium_photo-1683121602687-60c47b2222f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
            <p>House Painting</p>
            <li>consultation at 49</li>

        </div>
    </div>
</section> );
}

export default Best;