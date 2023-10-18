import  './card.css'
import ac from '../assets/ac.png';
import cleaning from '../assets/cleaning.png';
import electrician from '../assets/electrician.png';
import women from '../assets/women-salon.png';
import appliance from '../assets/appliance.png';
import massage from '../assets/massage.png';
import painter from '../assets/painter.png';
import carpenter from '../assets/carpenter.png';

function Card() {
    return ( <div className="card">
        <div className='card-elem'>
        <div className='women'>
            <img src={women} alt=""/>
            <p>Saloon</p>
        </div>     
        <div className='ac'>
            <img src={ac} alt=""/>
            <p>Ac service</p>
        </div> 
        <div className='electrician'>
            <img src={electrician} alt=""/>
            <p>Electrician</p>
        </div> 
        <div className=''>
            <img src={cleaning} alt=""/>
            <p>Cleaning and disinfection</p>
        </div>    
        <div className='carpenter'>
            <img src={carpenter} alt=""/>
            <p>Carpenter</p>
        </div>    
        <div className='painter'>
            <img src={painter} alt=""/>
            <p>Painter</p>
        </div>    
        <div className='appliance'>
            <img src={appliance} alt=""/>
            <p>Appliance</p>
        </div>    
        <div className='massage'>
            <img src={massage} alt=""/>
            <p>massage</p>
        </div>    
        </div>
      

    </div> );
}

export default Card;