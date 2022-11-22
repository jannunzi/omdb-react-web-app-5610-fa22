import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";

const Navigation = () => {
    const {currentUser} = useSelector((state) => state.users)
    const {pathname} = useLocation()
    const parts = pathname.split('/')
    console.log(parts)

    const screens = [
        'search',
        'users'
    ]
    if (currentUser) {
        screens.push('profile')
    } else {
        screens.push('login')
        screens.push('register')
    }

    return(
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link to="/"
                      className={`nav-link ${parts[1] === ''?'active': ''}`}>
                    Home
                </Link>
            </li>
            {
                screens.map((screen) =>
                    <li className="nav-item">
                        <Link to={`/${screen}`}
                              className={`nav-link ${parts[1] === screen?'active': ''}`}>
                            <span className="text-capitalize">{screen}</span>
                        </Link>
                    </li>
                )
            }
        </ul>
    )
}

export default Navigation