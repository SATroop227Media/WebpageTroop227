import "../styles/global/footer.css"

export default function Footer() {
    return (
        <footer className="cta">
          <div className='cta__left' aria-label='contact information'>
            <h4 className="cta__h4">Contact Us!</h4>
            <p>Email: mamoreno16gb@gmail.com</p>
            <p>Telephone: (317) 694-6384</p>
          </div>
          <div className='cta__right' aria-label='call to action'>
            <p>Troop 227-Indiana 2024 | Join us today!</p>
          </div>
        </footer>
    )
}