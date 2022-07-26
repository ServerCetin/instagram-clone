import {AiFillFacebook} from "react-icons/ai";
import Input from "./Input";
import {useState} from "react";

export default function RightForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const enable = username && password

    return (
        <div className="w-[350px] grid gap-y-3">

            <div className="bg-white border px-[40px] pt-10 pb-6">
                <a href="#" className="flex justify-center mb-8">
                    <img className="h-[51px]"
                         src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
                         alt=""/>
                </a>
                <form className="grid gap-y-1.5">
                    <Input type="text" value={username} onChange={e => setUsername(e.target.value)}
                           label="Phone number, username or email"/>
                    <Input type="password" value={password} onChange={e => setPassword(e.target.value)}
                           label="Password"/>
                    <button type="submit" disabled={!enable}
                            className="h-[30px] mt-1 rounded bg-brand font-medium text-white text-sm disabled:opacity-50">Log
                        In
                    </button>
                    <div className="flex items-center my-2.5 mb-3.5">
                        <div className="h-px bg-gray-300 flex-1"/>
                        <span className="px-4 text-[13px] text-gray-500 font-semibold">OR</span>
                        <div className="h-px bg-gray-300 flex-1"/>
                    </div>
                    <a href="#"
                       className="flex justify-center mb-2.5 items-center gap-x-2 text-sm font-semibold text-facebook">
                        <AiFillFacebook size={20}/>
                        Log in with Facebook
                    </a>
                    <a href="#" className="text-xs flex items-center justify-center text-link">Forgot password?</a>
                </form>
            </div>

            <div className="bg-white border p-4 text-sm text-center">
                Don't have an account? <a href="#" className="font-semibold text-brand">Sign up</a>
            </div>

        </div>

    )
}