import routes from "./routes";
import {useRoutes} from "react-router-dom"
import {useUser} from "./context/userContext";
import {Toaster} from "react-hot-toast";
import Loader from "./components/notLoggedIn/loader";

function App() {
    const {user} = useUser()
    const showRoutes = useRoutes(routes)

    if (user ===null) {
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
