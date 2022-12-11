import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "./users-thunk";
import {useNavigate} from "react-router";
import Follows from "../follows/follows";
import Likes from "../likes/likes";

const Profile = () => {
    const navigate = useNavigate()
    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const handleLogoutBtn = () => {
        dispatch(logoutThunk())
        navigate('/login')
    }
    return(
        <>
            <h1>Profile</h1>
            {
                currentUser &&
                <h2>Welcome new user: {currentUser.username}</h2>
            }
            <button
                className="btn btn-danger"
                onClick={handleLogoutBtn}>
                Logout
            </button>
            <Follows uid={currentUser._id}/>
            <Likes uid={currentUser._id} p1="v1" p2="v2"/>
        </>
    )
}
export default Profile