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
        {/* <nav>
          <ul>
            <li><a href=''>Home</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href=''>Contact</a></li>
          </ul>
        </nav> */}
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
                <h2 className='home-intro--header'>Scout Mission</h2>
                <p className='home-intro--p'>The mission of the Boy Scouts of America is to prepare young people to make ethical and moral choices over their lifetimes by instilling in them the values of the Scout Oath and Law.</p>
              </div>
              <div className='scout-law'>
                <h2 className='home-intro--header'>Scout Law</h2>
                <p className='home-intro--p'>A Scout is trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean, and reverent.</p>
              </div>
              <div className='scout-oath'>
                <h2 className='home-intro--header'>Scout Oath</h2>
                <p className='home-intro--p'>“On my honor I will do my best to do my duty to God and my country and to obey the Scout Law; to help other people at all times; to keep myself physically strong, mentally awake, and morally straight.”</p>  
              </div>
            </div>
            <figure>
              <img src={group}/>
            </figure>
        </div>
      </section>
    <section className='home-impact'>
        <h1>Impacting the Community at Large</h1>
        <div className='gallery responsive-grid'>
          <figure className='gallery-item'>
            <figcaption className='gallery-desc'>
              <img src={project1}/>
              <h3>Project title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi enim. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Mi sit amet mauris commodo quis. </p>
              <a href='' className='gallery-button'>Read More</a>
            </figcaption>
          </figure>
          <figure className='gallery-item'>
            <figcaption className='gallery-desc'>
              <img src={project2}/>
              <h3>Project title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi enim. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Mi sit amet mauris commodo quis. </p>
              <a href='' className='gallery-button'>Read More</a>
            </figcaption>
          </figure>
          <figure className='gallery-item'>
            <figcaption className='gallery-desc'>
              <img src={project3}/>
              <h3>Project title</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer feugiat scelerisque varius morbi enim. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Mi sit amet mauris commodo quis. </p>
              <a href='' className='gallery-button'>Read More</a>
            </figcaption>
          </figure>
        </div>
    </section>
    <footer>
      <section className='home-cta'>
        <div className='footer-left'>
          <h1>Join Us Today!</h1>
          <p>Email: mamoreno16gb@gmail.com</p>
          <p>Phone: (317) 694-6384</p>
        </div>
        <div className='footer-right'>
          <p>Troop 227-Indiana 2024 | <a href='https://github.com/moreno-m2698/'>Website created by Michael Moreno</a></p>
        </div>
      </section>
      
    </footer>
    </>
  )
}

export default App
