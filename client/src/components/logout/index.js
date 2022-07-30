import {useUser} from "../../context/userContext";
import {useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom"


export default function Logout() {
    const {handleLogout} = useUser()

    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        handleLogout()
        navigate(location.state?.return_url || '/', {replace: true})
    }, []);


    return <>sad</>
}