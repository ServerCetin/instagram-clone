import {useParams, NavLink, Outlet} from "react-router-dom";
import {useEffect, useState} from "react";
import classNames from "classnames";
import {Helmet} from "react-helmet";
import ProfileNotFound from "./notFound";
import Header from "./header";
import {useUser} from "../../context/userContext";
import Icon from "../custom/Icon";

export default function ProfileLayout() {

    const {getUserByUsername} = useUser()
    const [user, setUser] = useState(null)
    const {username} = useParams()

    useEffect(() => {
        getUserByUsername(username)
            .then(user => {
                setUser(user)
            })
            .catch(err => {
                console.log(err)
                setUser(false)
            })
    }, [username, getUserByUsername])

    if (user === undefined || user === false) {
        return <ProfileNotFound />
    }

    if (user === null) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    return user && (
        <div>
            <Helmet>
                <title>{user.fullName} (@{user.username}) • Instagram photos and videos</title>
            </Helmet>
            <Header user={user} />
            <nav className="border-t flex gap-x-16 justify-center items-center">
                <NavLink to={`/${username}`} end={true} className={({isActive}) => classNames({
                    "text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
                    "text-[#8e8e8e] border-transparent": !isActive,
                    "text-black border-black": isActive
                })}>
                    <Icon name="post" size={12} />
                    POSTS
                </NavLink>
                <NavLink to={`/${username}/tagged`} end={true} className={({isActive}) => classNames({
                    "text-xs flex py-5 border-t tracking-widest -mt-px items-center gap-x-1.5 font-semibold": true,
                    "text-[#8e8e8e] border-transparent": !isActive,
                    "text-black border-black": isActive
                })}>
                    <Icon name="tag" size={12} />
                    TAGGED
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}