import {Link, NavLink} from "react-router-dom";
import {useUser} from "../../context/userContext";
import SearchBar from "../custom/SearchBar";
import {HomeIconSvg} from "../../assets/svg/homeIcon";
import {ExploreIconSvg} from "../../assets/svg/explore";
import {MessagesIconSvg} from "../../assets/svg/messages";
import {NewPostIconSvg} from "../../assets/svg/newPost";
import {ActivityIconSvg} from "../../assets/svg/activity";

export default function Header() {
    const {user} = useUser()

    return (
        <header className="bg-white border-b border-gray-300">
            <div className="flex items-center justify-between h-[60px] max-w-5xl mx-auto">

                <Link to="/">
                    <img alt="a" className="h-[29px]"
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
                        <ActivityIconSvg/>
                    </NavLink>
                    <NavLink to={`/${user.username}`}>
                        <img alt="profile-photo" width="24" height="24"  src={require('../../assets/img/default-profile-photo.jpg')}/>
                    </NavLink>
                </nav>
            </div>
        </header>
    )
}