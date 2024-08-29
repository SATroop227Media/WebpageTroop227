import project1 from '../../../assets/project1.jpg'
import project2 from '../../../assets/project2.jpg'
import project3 from '../../../assets/project3.jpg'
import group from '../../../assets/group.jpg'
import stock1 from '../../../assets/Stock1.jpg'
import badgeStock from '../../../assets/scoutBadgeStock.jpg'

import '../../../styles/components/main-hero.css'
import '../../../styles/components/main-intro.css'
import '../../../styles/components/main-values.css'
import '../../../styles/components/main-impact.css'
import '../../../styles/global/polaroid.css'
import { useEffect } from 'react'


function MainContent() {

  useEffect(() => {
    const animatables = document.querySelectorAll("[data-comp-observee]")
    const imgWrapper = document.querySelector(".home-values__img-wrapper")

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle("observed", entry.isIntersecting);
        if (entry.isIntersecting) observer.unobserve(entry.target);
      });
    }, 
    {
      root: null,
      threshold: .01,
      rootMargin: "0px"
    });

    const imgWrapperObserver = new IntersectionObserver((entries) => {
      const [ entry ] = entries;
      entry.target.classList.toggle("observed", entry.isIntersecting);
      if (entry.isIntersecting) imgWrapperObserver.unobserve(entry.target);
    }, {
      root: null,
      threshold: Number(imgWrapper?.getAttribute("data-comp-observee-threshold")),
      rootMargin: "0px"
    });

    animatables.forEach(animatable => {
      observer.observe(animatable)
    });

    imgWrapperObserver.observe(imgWrapper!);

    return () => {
      animatables.forEach(animatable => {
        observer.unobserve(animatable)
      })
      imgWrapperObserver.unobserve(imgWrapper!);
    }
  }, [])

  return (
    <>
      <section className="home-hero" aria-label="Our Impact" data-comp-observee="" data-comp-observee-threshold=".01">
        <article className='home-hero__content'>
          <h1 className='home-hero__header'>Creating the leaders of tomorrow by fostering the youth of today  </h1>
          <p className='home-hero__description'>For over 60 years, Troop 227 has been active in Johnson County and bringing about positive change. We seek to instill the values and mission of Scouting into the young men and women by teaching skills and lessons to last a life time!</p>
        </article>
        <div className='home-hero__background'>
          <img src={stock1} alt='A procession of scouts parading with banners as they proceed on a trail between the mountains'/>
        </div>
      </section>

      <section className='home-intro'>
        <h2>Be a part of something more</h2>
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
        <div className='polaroid polaroid-skewed'>
          <img src={group} alt='A group photo of the scouts and scout leaders of Boy Scout Troop 227 in a campsite at Ransburg Scout Reservation'/>
        </div>
      </section>

      <section className='home-values' aria-label="Be prepared">
        <article className='home-values__content'>
          <h2>"Be Prepared"</h2>
          <p>Our motto - Be Prepared - the slogan that we live by. 
            By teaching our scouts the importance of preparing themselves to become strong leaders and productive citizens we give them the skills that will last a lifetime.</p>
          <div className='home-values__content-bottom'>
            <div className='home-values__cards-content'>
              <div className='home-values__card' data-comp-observee="">
                <h3>Scout Mission</h3>
                <p>The mission of the Boy Scouts of America is to prepare young people to make ethical and moral choices over their lifetimes by instilling in them the values of the Scout Oath and Law.</p>
              </div>
              <div className='home-values__card' data-comp-observee="">
                <h3>Scout Law</h3>
                <p>A Scout is trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty, brave, clean, and reverent.</p>
              </div>
              <div className='home-values__card' data-comp-observee="">
                <h3>Scout Oath</h3>
                <p>“On my honor I will do my best to do my duty to God and my country and to obey the Scout Law; to help other people at all times; to keep myself physically strong, mentally awake, and morally straight.”</p>  
              </div>
            </div>
            <div className='home-values__img-wrapper' data-comp-observee="" data-comp-observee-threshold=".01">
              <img src={badgeStock} alt='A scout pointing to the merit badges on the sash worn by another scout'/>
            </div>
          </div>
        </article>
      </section>

      <section className='home-impact' aria-label='making a difference'>
        <h2>See our impact!</h2>
        <p>Troop 227 aids in community development by volunteering and by giving youth a safe space to grow and foster their values. 
          Across Johnson County you can find where our young leaders have left their mark through the love for their community and for scouting.
        </p>
        <ul className='home-impact__list' aria-label="community projects by troop 227">
          <li>
            <article className='home-impact__list-item' aria-labelledby='project-1' data-comp-observee="">
              <div className='home-impact__item-img polaroid'>
                <img src={project1} alt="Two scouts out of uniform and a volunteer observing another volunteer as he measures the distance between two posts on a piece of playground equipment that is currently being worked on"/>  
              </div>
              <div className='home-impact__item-content'>
                <h3>
                  Jonathan Gaven Miller - Saint Rose of Lima School
                </h3>
                <p>
                  Gaven built playground equipment for Preschool children at St. Rose of Lima school in Franklin.  
                  The equipment was needed to fulfill playground equipment for preschool age children, which they did not have. 
                  The two balance beams on the ground  108" wide x 18" deep x 7" high out of treated wood. A See Saw  111" wide x 19" deep x 24" high out of treated wood. 
                  The Rockapotamus (rocking hippo) is 69" wide x 42" deep x 28" high out of treated wood. 
                  The play fort/post made out of treated wood. All equipment is able to be transported if needed. 
                  Additionally, two trees were purchased and planted along with mulch around the trees. 
                  The equipment and other add-ons provide entertainment for the preschool children of St. Rose.  
                  Troop members and volunteers assisted in assembling the playground equipment and doing the planting of trees.  
                  Gaven raised money at church and trough private contributors.
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className='home-impact__list-item' aria-labelledby='project-2' data-comp-observee="">
              <div className='home-impact__item-img polaroid'>
                <img src={project2} alt='Scout, Alejandro Garnica, and a volunteer standing together infront of lunch bags created for Eagle Scout project inside of a warehouse'/>
              </div>
              <div  className='home-impact__item-content'>
                <h3>Alejandro Garnica - Johnson County Food Pantry</h3>
                <p>
                  Alejandro put together bags for the Johnson County Interchurch Food Pantry consisting of 200 weekend lunch bags and 75 birthday bags. 
                  The lunch bags including a meal and several snacks while the birthday bag including a cake and toy so that the families can have birthdays for their kids. 
                  This helped the families with the Food Pantry to have food and be able to have birthdays.  
                  Money was raised at St Rose of Lima church, and donations of items from customers at Dollar Tree.  
                  The bags were assembled by volunteers including troop members.  
                  After completion, a caravan of volunteers drove and delivered the items to the food pantry.
                </p>
              </div>
            </article>
          </li>
          <li>
            <article className='home-impact__list-item' aria-labelledby='project-3' data-comp-observee="">
              <div className='home-impact__item-img polaroid'>
                <img src={project3} alt='Scout, Joshua Stephen Miller, standing infront of the three clothing racks he created for his Eagle Scout project at Resources of Hope'/>
              </div>
              <div  className='home-impact__item-content'>
                <h3>Joshua Stephen Miller - Resources of Hope</h3>
                <p>
                  Joshua assisted Resources of Hope in Whiteland, Indiana in relocating to a larger facility in Whiteland. 
                  Part of the project included building three 10ft long free-standing clothing racks that was built on-site in the new facility.  
                  Money was raised at local churches and other donors.  Substantial effort was to relocate the clothing items from the old location to the new one. 
                  Troop members and other volunteers assisted in collecting clothing items and moving them. 
                  Resources of Hope strives to meet the physical needs of foster youth through The Closet. 
                  At The Closet, foster/kinship families can shop for free clothing, shoes, seasonal wear, toys, and more for the children in their care. 
                  The project helped this organization move to a larger location to help more families.
                </p>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </>
  );
}

export default MainContent