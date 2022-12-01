import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

const Navigation = () => {
    const {currentUser} = useSelector((state) => state.users)
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
            <li className={`nav-item ${!currentUser ? 'd-none':''}`}>
                <Link to="/users"
                      className={`nav-link ${parts[1] === 'users'?'active': ''}`}>
                    Users
                </Link>
            </li>
            <li className={`nav-item ${currentUser ? 'd-none':''}`}>
                <Link to="/login"
                      className={`nav-link ${parts[1] === 'login'?'active': ''}`}>
                    Login
                </Link>
            </li>
            <li className={`nav-item ${currentUser ? 'd-none':''}`}>
                <Link to="/register"
                      className={`nav-link ${parts[1] === 'register'?'active': ''}`}>
                    Register
                </Link>
            </li>
            <li className={`nav-item ${!currentUser ? 'd-none':''}`}>
                <Link to="/profile"
                      className={`nav-link ${parts[1] === 'profile'?'active': ''}`}>
                    Profile
                </Link>
            </li>
        </ul>
    )
}

export default Navigation