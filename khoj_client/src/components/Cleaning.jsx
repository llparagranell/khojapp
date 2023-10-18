import { useNavigate } from 'react-router-dom';
import './cleaning.css'

function Cleaning() {
    const navigate = useNavigate();

    return ( <section id="clean">
        <h1>Cleaning & Pest Control</h1>
        <div className="cleaning">
            <div className="clean-card" onClick={()=> navigate('/list',{state:{cat:"House Cleaning"}})}>
                <img src="https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                <p>Bathroom & Kitchen Cleaning</p>
            </div>
            <div className="clean-card" onClick={()=> navigate('/list',{state:{cat:"House Cleaning"}})}>
                <img src="https://plus.unsplash.com/premium_photo-1661662917928-b1a42a08d094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                <p>Full Home Cleaning</p>
            </div>
            <div className="clean-card" onClick={()=> navigate('/list',{state:{cat:"Furniture Cleaning"}})}>
                <img src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
                <p>Sofa & Carpet Cleaning</p>
            </div>
        </div>
    </section> );
}

export default Cleaning;