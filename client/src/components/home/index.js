import {useUser} from "../../context/userContext";

export default function Home() {
    const {user, handleLogout} = useUser()

    return (
        <>
            <div>Home</div>
            <div>Welcome {`${user.username}`}</div>
            <button onClick={handleLogout} className='text-red-600'>Log out!!!</button>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
    )
}