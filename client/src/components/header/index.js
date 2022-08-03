import {Link, NavLink} from "react-router-dom";
import {useUser} from "../../context/userContext";
import SearchBar from "../custom/SearchBar";
import {HomeIconSvg} from "../../assets/svg/homeIcon";
import {ExploreIconSvg} from "../../assets/svg/explore";
import {MessagesIconSvg} from "../../assets/svg/messages";
import {NewPostIconSvg} from "../../assets/svg/newPost";
import {ActivityIconSvg} from "../../assets/svg/activity";
import Button from "../custom/Button";

export default function Header() {
    const {handleLogout} = useUser()

    return (
        <header className="bg-white border-b border-gray-300">
            <div className="flex items-center justify-between h-[60px] max-w-5xl mx-auto">

                <Link to="/">
                    <img className="h-[29px]"
                         src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"/>
                </Link>

                <SearchBar />
                <nav className="flex gap-x-6">
                    <NavLink to="/">
                        <HomeIconSvg />
                    </NavLink>
                    <NavLink to="/">
                        <MessagesIconSvg />
                    </NavLink>
                    <NavLink to="/">
                        <NewPostIconSvg />
                    </NavLink>
                    <NavLink to="/">
                        <ExploreIconSvg />
                    </NavLink>
                    <NavLink to="/">
                        <ActivityIconSvg />
                    </NavLink>
                    <button onClick={handleLogout}>
                        <img alt="profile-photo" width="24" height="24"  src={require('../../assets/img/default-profile-photo.jpg')}/>
                    </button>
                </nav>
            </div>
        </header>
    )
}