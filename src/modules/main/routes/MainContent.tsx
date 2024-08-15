import project1 from '../../../assets/project1.jpg'
import project2 from '../../../assets/project2.jpg'
import project3 from '../../../assets/project3.jpg'
import group from '../../../assets/group.jpg'
import stock1 from '../../../assets/Stock1.jpg'
import eagle2 from '../../../assets/EagleScout2.jpg'
import trail1 from '../../../assets/forestTrail1.jpg'

import '../../../styles/global/App.css'
import '../../../styles/components/mainhero.css'
import '../../../styles/components/mainintro.css'
import '../../../styles/components/mainvalues.css'
import '../../../styles/components/mainimpact.css'
import '../../../styles/components/maincontent.css'

function MainContent() {
    return (
      <>
        <section className="home-hero" aria-label="Our Impact">
          <article className='home-hero__content'>
            <h1 className='home-hero__header'>Creating the leaders of tomorrow by fostering the youth of today!</h1>
            <p className='home-hero__description'>For over 60 years, Troop 227 has been active in Johnson County and bringing about positive change. We seek to instill the values and mission of Scouting into the young men and women by teaching skills and lessons to last a life time!</p>
          </article>
          <div className='home-hero__background'>
            <img src={stock1}/>
          </div>
        </section>

        <section className='home-intro'>
          <h2>Come be a part of Troop 227!</h2>
          <p>
            Troop 227 began when it was chartered in __ and has been serving scouts in the Johnson County area ever since. 
            We are a part of the Pathfinder District within Indiana's Cross Roads of America Council and conduct our activities primarily in Southern Indiana. 
          </p>
          <p>
            Our mission is to foster within our scouts the vision of Scouting and inspire them to develop as leaders within their community. 
            By living life aligned with the values of the Scout Oath and Scout Law, our scouts carry on the wishes of Scouting's founder Lord Baden-Powell while also developing their character. 
            We want to create in our troop a community that encourages brotherhood while also allowing the fun that can be found in scouting to be at the forefront.
          </p>
          <p>
            We sincerely hope that you and your family consider becoming involved with Scouting and that you contact one of our leaders if you're interested in joining.
          </p>
          <div>
            <img src={eagle2}/>
          </div>
        </section>

        <section className='home-values' aria-label="Be prepared">
          <div className='home-values__background'>
            <img src={trail1}/>
          </div>
          <article className='home-values__wrapper'>
            <h2>Be Prepared</h2>
              <div className='home-values__content'>
                <div className='home-values__container'>
                  <h2 className='home-values__h2'>Scout Mission</h2>
                  <p className='home-values__p'>The mission of the Boy Scouts of America is to prepare young people to make ethical and moral choices over their lifetimes by instilling in them the values of the Scout Oath and Law.</p>
                </div>
                <div className='home-values__container'>
                  <h2 className='home-values__h2'>Scout Law</h2>
                  <p className='home-values__p'>A Scout is trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean, and reverent.</p>
                </div>
                <div className='home-values__container'>
                  <h2 className='home-values__h2'>Scout Oath</h2>
                  <p className='home-values__p'>“On my honor I will do my best to do my duty to God and my country and to obey the Scout Law; to help other people at all times; to keep myself physically strong, mentally awake, and morally straight.”</p>  
                </div>
              </div>
              <div className='polaroid'>
                <img src={group} alt='A group photo of Troop 227 at a camp site'/>
              </div>
          </article>
        </section>

        <section className='home-impact' aria-label='making a difference'>
          <h2>See our Impact!</h2>
          <p>Troop 227 aids in community development by volunteering and by giving youth a safe space to grow and foster their values. 
            Across Johnson County you can find where our young leaders have left their mark through the love for their community and fpr scouting.
          </p>
          <ul className='home-impact__list responsive-grid' aria-label="community projects by troop 227">
            <li className=''>
              <figure className='home-impact__list-item' aria-labelledby='project-1'>
                <img src={project1} alt="Troop 227 scout and adult leaders measuring dimensions of a children's playground"/>
                <figcaption className='gallery-desc'>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure className='home-impact__list-item' aria-labelledby='project-2'>
                <img src={project2} alt='Scout and his grandfather standing in front of food that was donated for his Eagle project'/>
                <figcaption className='gallery-desc'>  
                </figcaption >
              </figure>
            </li>
            <li>
              <figure className='home-impact__list-item' aria-labelledby='project-3'>
                <img src={project3} alt='Scout standing infront of clothing racks created for his Eagle project'/>
                <figcaption className='gallery-desc'>
                </figcaption>
              </figure>
            </li>
          </ul>
        </section>
      </>
    )
}

export default MainContent