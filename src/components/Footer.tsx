import "../styles/global/footer.css"

export default function Footer() {
  return (
    <footer className="cta">
      <h3>Contact Us!</h3>
      <ul className="cta__contact-wrapper">
        <li>
          <h4>Joseph "JD" Henry - Scoutmaster</h4>
          <a href="mailto:Jdhenryx@gmail.com?subject=Joining Troop 227">Jdhenryx@gmail.com</a>
          <a href="tel:3173139392">(317) 313-9392</a>
        </li>
        <li>
          <h4>Ron Smith - Committee Chair</h4>
          <a href="mailto:rsmith@indianaskypics.com?subject=Joining Troop 227">rsmith@indianaskypics.com</a>
          <a href="tel:3174392640">Telephone: (317) 439-2640</a>
        </li>
      </ul>
      <p>Troop 227-Indiana 2024 | Join us today!</p>
    </footer>
  );
}