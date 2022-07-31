import {useUser} from "../../context/userContext";

export default function Home() {
    const {user} = useUser()

    return (
        <>
            <div>Home</div>
            <div>Welcome {`${user.displayName}`}</div>
            <a href="/auth/logout" className='text-red-600'>Log out!!!</a>
        </>
    )
}