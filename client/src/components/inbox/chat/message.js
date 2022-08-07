import classNames from "classnames";
import {useUser} from "../../../context/userContext";

export default function Message({ message }) {

    const {user} = useUser()

    return (
        <div className={classNames({
            "flex gap-x-2 max-w-[45%]": true,
            "self-end mr-4": user.username === message.from.username
        })}>
            {user.username !== message.from.username && (
                <img src={message.from.avatar} className="w-6 h-6 rounded-full self-end mb-1" alt=""/>
            )}
            <p
                style={{hyphens: 'auto'}}
                className={classNames({
                    "min-h-[44px] inline-flex items-center py-3 px-4 text-sm rounded-3xl": true,
                    "border border-gray-200": user.username !== message.from.username,
                    "bg-[#efefef]": user.username === message.from.username
                })}>
                {message.message}
            </p>
        </div>
    )
}