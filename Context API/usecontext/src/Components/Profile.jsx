import UserContext from "./UserContext";
import { useContext } from "react";
import '../profile.css';

function Profile() {
    let user1 = useContext(UserContext);

    return(
        <div className="header-cont">
            <h3>{user1.message}</h3>
            <img className="img" src={user1.image} alt="prifileImg"/>
        </div>
    )
}

export default Profile;