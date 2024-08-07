import { useEffect, useState } from 'react';

import { Link } from "react-router-dom"
import "../styles/global/nav.css"
import BWLogo from "../assets/logo-bw.png"

export default function AppNav() {
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const [scrollDirection, setScrollDirection] = useState<number>(0); // 'up' or 'down'
    

    //TODO: double check tomorrow
    //debouner is non-responsive/it just disappears from page functionality

    const eventDebounce = (cb: any, delay: number = 1000 / 60) => {
        let timeout = setTimeout(cb, delay); //Performs my function after a delay

        return () => {
            clearTimeout(timeout); //clears out timeout variable
        
            timeout = setTimeout(() => { //reinstantiates a new callback to timeout var to complete cycle
                cb();
            }, timeout)
        }
    }

    const handleScroll = (): void => {

        const scrollTop = window.scrollY; //returns number of pixels that the window is scrolled vertially
    
        if (scrollTop > lastScrollTop) {
            console.log('down')
          setScrollDirection(-1);
        } else if (scrollTop < lastScrollTop) {
            console.log('up')
          setScrollDirection(1);
        }
        setLastScrollTop(scrollTop); //resets last scroll amount
      };
    
      useEffect(() => {
        window.addEventListener('scroll', eventDebounce(handleScroll));
        return () => {
          window.removeEventListener('scroll', eventDebounce(handleScroll));
        };
      }, [lastScrollTop]);



    return (
        <header className={"header-nav".concat(" ", scrollDirection >= 0 ? "" : "hide")}>
            <div className='header-nav__logo' aria-roledescription="logo">
              <img src={BWLogo} alt="Official logo of the Boy Scouts of America"/>
              <h1 className='header-nav__title'>Boy Scout Troop 227<span>American Legion Post 205</span></h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/projects`}>Projects</Link>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
    
    
}

