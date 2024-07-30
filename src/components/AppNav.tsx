import { Link } from "react-router-dom"


export default function AppNav() {
    return (
        <header>
            <div className='header-logo' aria-roledescription="logo">
              <img src='https://beascout.scouting.org/wp-content/uploads/2022/06/BSALogo-1.png' alt="Official logo of the Boy Scouts of America"/>
              <h1 className='header-title'>Boy Scout Troop 227<span>American Legion Post 205</span></h1>
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
