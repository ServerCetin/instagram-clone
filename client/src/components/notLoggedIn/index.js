import LeftPhone from "./leftPhone/leftPhone";
import RightForm from "./rightForm/rightForm";
import {Toaster} from "react-hot-toast";
import {useUser} from "../../context/userContext";
import {useEffect} from "react";
import {useNavigate, useLocation} from "react-router-dom"

export default function Login(){
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
                <LeftPhone />
                <RightForm />
            </div>

            <div className="container mx-auto justify-center items-center text-center">
                <div>
                    <a className="text-gray-400 px-2 text-xs" href="#">Text</a>
                    <a className="text-gray-400 px-2 text-xs" href="#">Text</a>
                    <a className="text-gray-400 px-2 text-xs" href="#">Text</a>
                    <a className="text-gray-400 px-2 text-xs" href="#">Text</a>
                    <a className="text-gray-400 px-2 text-xs" href="#">Text</a>
                    <a className="text-gray-400 px-2 text-xs" href="#">Text</a>
                    <a className="text-gray-400 px-2 text-xs" href="#">Text</a>
                    <a className="text-gray-400 px-2 text-xs" href="#">Text</a>
                    <a className="text-gray-400 px-2 text-xs" href="#">Text</a>
                    <a className="text-gray-400 px-2 text-xs" href="#">Text</a>
                </div>
                <div>
                    <p className="text-gray-400 px-2 text-xs">© 2022 Instagram from Meta</p>
                </div>
                <div><Toaster position="top-right" reverseOrder={false}/></div>
            </div>
        </div>
    );
};

