import "../styles/global/footer.css"
import logo from "../assets/logo-white.png"

export default function Footer() {
  return (
    <footer className="cta">
      <h3>Contact Us!</h3>
      <div className="cta__content">
        <ul className="cta__contact-wrapper cta__left">
          <li>
            <h4>Joseph "JD" Henry - Scoutmaster</h4>
            <a href="mailto:Jdhenryx@gmail.com?subject=Joining Troop 227">Email: Jdhenryx@gmail.com</a>
            <a href="tel:3173139392">Phone: (317) 313-9392</a>
          </li>
          <li>
            <h4>Ron Smith - Committee Chair</h4>
            <a href="mailto:rsmith@indianaskypics.com?subject=Joining Troop 227">Email: rsmith@indianaskypics.com</a>
            <a href="tel:3174392640">Phone: (317) 439-2640</a>
          </li>
        </ul>
        <div className="cta__right">
          <img src="https://www.scouting.org/wp-content/uploads/2022/06/bsa-logo-hero-1.png"/>
        </div>
      </div>
      <p>Boy Scout Troop 227 - Indiana 2024 | <a href="mailto:Jdhenryx@gmail.com?subject=Joining Troop 227">Join us today!</a></p>
    </footer>
  );
}