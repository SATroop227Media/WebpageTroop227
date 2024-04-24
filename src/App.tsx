import project1 from './assets/project1.jpg'
import project2 from './assets/project2.jpg'
import project3 from './assets/project3.jpg'
import scoutMasters from './assets/leaders.jpg'
import './App.css'

function App() {

  return (
    <>
      <header>
        <div className='header-logo'>
          <img src='https://beascout.scouting.org/wp-content/uploads/2022/06/BSALogo-1.png'/>
          <h1 className='header-title'>Boy Scout Troop 227<span>Franklin Indiana</span></h1>
        </div>
        <nav>
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href=''>Contact</a></li>
          </ul>
        </nav>
    </header>
    <section className="home-banner">
      <div className='container'>
        <h1 className='home-banner--statement'>Impacting the community<span>by shaping the youth of Johnson County for 60 years.</span></h1>
      </div>
    </section>
    <div className='container'>
      <section className='home-intro'>
        <figure>
          <img src={scoutMasters}/>
        </figure>
        {/* This is copied from the offical BS site Make sure to change! */}
        <div className='mission'>
          <h1>Our Mission</h1>
          <p>The mission of the Boy Scouts of America is to prepare young people to make ethical and moral choices over their lifetimes by instilling in them the values of the Scout Oath and Law.</p>
        </div>
      </section>
    </div>
    <section className='home-gallary'>
      <h1>Community Impact</h1>
      <p>Living by the Scout Oath and helping their community!</p>
      <figure>
        <figcaption>
          <img src={project1}/>
          <p>Project title</p>
          <a href=''>Project Details</a>
        </figcaption>
      </figure>
      <figure>
        <figcaption>
          <img src={project2}/>
          <p>Project title</p>
          <a href=''>Project Details</a>
        </figcaption>
      </figure>
      <figure>
        <figcaption>
          <img src={project3}/>
          <p>Project title</p>
          <a href=''>Project Details</a>
        </figcaption>
      </figure>
    </section><section className='home-contact'>
      <h1>Join Us Today!</h1>
        <p>Email: moreno email</p>
    </section>
    <footer>
    </footer>
    </>
  )
}

export default App
