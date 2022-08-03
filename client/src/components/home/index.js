import {useUser} from "../../context/userContext";
import Header from "../header";

export default function Home() {
    const {user} = useUser()

    return (
        <>
            <div>Home</div>
            <div>Welcome {`${user.username}`}</div>
            <a href="/auth/logout" className='text-red-600'>Log out!!!</a>
            <p>{JSON.stringify(user)}</p>
        </>
    )
}