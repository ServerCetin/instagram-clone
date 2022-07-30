import routes from "./routes";
import {useRoutes} from "react-router-dom"
import {useUser} from "./context/userContext";
import {useEffect, useState} from "react";
import {Toaster} from "react-hot-toast";
import Loader from "./components/notLoggedIn/loader";

function App() {
    const {user} = useUser()
    const showRoutes = useRoutes(routes)

    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        let timeout = setTimeout(() => {
            setRedirect(true)
        }, 1000)
        return () => {
            clearTimeout(timeout)
        }
    }, []);


    if (!user && !redirect) {
        return <Loader/>
    }

    return (
        <>
            <Toaster position="top-right"/>
            {showRoutes}
        </>
    )
}

export default App;
