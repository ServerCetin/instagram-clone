import LeftPhone from "./leftPhone/leftPhone";
import RightForm from "./rightForm/rightForm";
import {useUser} from "../../context/userContext";
import {useNavigate, useLocation} from "react-router-dom"
import Footer from "../footer";
import {useEffect} from "react";

export default function Login(){
    const {user} = useUser()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        user && navigate(location.state?.return_url || '/', {replace: true})
    }, [user]);

    return (
        <div className="h-full w-full  bg-main">
            <div className="flex items-center justify-center gap-x-8 py-6">
                <LeftPhone />
                <RightForm />
            </div>

            <Footer />
        </div>
    );
};

