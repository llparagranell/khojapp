import "./footer.css";
import K from '../assets/K.png'
function Footer() {
  return (
    <section id="footer">
      <div className="footer">
        <div className="footer-logo">
          <img src={K} alt="" />
        </div>
        <div className="footer-elements">
          <ul>
          <li>House Cleaning</li>
          <li>Furniture Cleaning</li>
          <li>Electonics Work</li>
          <li>Carpainter</li>
          <li>Plumber</li>
          <li>Grooming Work</li>
          </ul>
          <ul>
            <li>Cart</li>
            <li>Help</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <div className="copy">
        @copyright-llparagranell
      </div>
    </section>
  );
}

export default Footer;
