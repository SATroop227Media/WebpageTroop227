import project1 from './assets/project1.jpg'
import project2 from './assets/project2.jpg'
import project3 from './assets/project3.jpg'
import group from './assets/group.jpg'
import './App.css'

function App() {

  return (
    <>
      <header>
        <div className='header-logo'>
          <img src='https://beascout.scouting.org/wp-content/uploads/2022/06/BSALogo-1.png'/>
          <h1 className='header-title'>Boy Scout Troop 227<span>American Legion Post 205</span></h1>
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
      <section className='home-intro'>
        {/* This is copied from the offical BS site Make sure to change! */}
        <div className='container home-intro--all'>
          <h1>Be Prepared</h1>

            <div className='home-intro--content'>
              <div className='mission'>
                <h2>Our Mission</h2>
                <p>The mission of the Boy Scouts of America is to prepare young people to make ethical and moral choices over their lifetimes by instilling in them the values of the Scout Oath and Law.</p>
              </div>
              <div className='scout-law'>
                <h2>Scout Law</h2>
                <p>A Scout is trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean, and reverent.</p>
              </div>
              <div className='scout-oath'>
                <h2 id='scout-oath'>Scout Oath</h2>
                <p>“On my honor I will do my best to do my duty to God and my country and to obey the Scout Law; to help other people at all times; to keep myself physically strong, mentally awake, and morally straight.”</p>  
              </div>
            </div>
            <figure>
              <img src={group}/>
            </figure>
        </div>
      </section>
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
