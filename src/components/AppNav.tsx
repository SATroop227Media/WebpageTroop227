import { Link } from "react-router-dom"

export default function AppNav() {
    return <nav>
        <ul>
            <li>
                <Link to={`/`}>Home</Link>
            </li>
            <li>
                <Link to={`/projects`}>Projects</Link>
            </li>
        </ul>
    </nav>
}
