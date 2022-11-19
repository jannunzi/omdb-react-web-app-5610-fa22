import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const Navigation = () => {
    const {pathname} = useLocation()
    const parts = pathname.split('/')
    console.log(parts)
    return(
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link to="/"
                      className={`nav-link ${parts[1] === ''?'active': ''}`}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/search"
                      className={`nav-link ${parts[1] === 'search'?'active': ''}`}>
                    Search
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/users"
                      className={`nav-link ${parts[1] === 'users'?'active': ''}`}>
                    Users
                </Link>
            </li>
        </ul>
    )
}

export default Navigation