import {useNavigate, useParams} from "react-router-dom";
import {useUser} from "../../context/userContext";
import {useEffect, useState} from "react";

export default function UserProfile() {
    const {username} = useParams()
    const {getUserByUsername} = useUser()
    const [fetchedUser, setFetchedUser] = useState(false)
    const navigate = useNavigate()

    useEffect(async () => {
        await getUserByUsername(username).then((user) => {
            setFetchedUser(user)
        }).catch(() => {
            navigate('/', {replace: true})
        })

    }, []);


    return (
        <>
            <h1>Yuppi</h1>
            <pre> {JSON.stringify(fetchedUser, null, 2)}</pre>
        </>
    )
}