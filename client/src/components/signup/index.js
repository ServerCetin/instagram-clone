import {useUser} from "../../context/userContext";
import {useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom"
import SignupForm from "./signupForm";
import Footer from "../footer";

export default function Signup(){
    const {user} = useUser()
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(() => {
        if(user)
            navigate(location.state?.return_url || '/', {replace: true})
    }, []);

    return (
        <div className="h-full w-full  bg-main">

            <div className="flex items-center justify-center gap-x-8 py-6">
                <SignupForm />
            </div>

            <Footer/>
        </div>
    );
};

