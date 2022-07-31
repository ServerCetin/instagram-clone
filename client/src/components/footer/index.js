import {Toaster} from "react-hot-toast";

export default function Footer(){
    return(
        <div className="container mx-auto justify-center items-center text-center">
            <div>
                <a className="text-gray-400 px-2 text-xs" href="/">Text</a>
                <a className="text-gray-400 px-2 text-xs" href="/">Text</a>
                <a className="text-gray-400 px-2 text-xs" href="/">Text</a>
                <a className="text-gray-400 px-2 text-xs" href="/">Text</a>
                <a className="text-gray-400 px-2 text-xs" href="/">Text</a>
                <a className="text-gray-400 px-2 text-xs" href="/">Text</a>
                <a className="text-gray-400 px-2 text-xs" href="/">Text</a>
                <a className="text-gray-400 px-2 text-xs" href="/">Text</a>
                <a className="text-gray-400 px-2 text-xs" href="/">Text</a>
                <a className="text-gray-400 px-2 text-xs" href="/">Text</a>
            </div>
            <div>
                <p className="text-gray-400 px-2 text-xs">© 2022 Instagram from Meta</p>
            </div>
            <div><Toaster position="top-right" reverseOrder={false}/></div>
        </div>
    )
}