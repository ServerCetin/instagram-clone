import {useState} from "react";
import Icon from "../../custom/Icon";

export default function Reply({ setMessages }) {

    const [message, setMessage] = useState('')

    const sendMessage = e => {
        e.preventDefault()
        setMessages(messages => [
            ...messages,
            {
                from: {
                    name: 'Server CETIN',
                    username: 'servercetin',
                    avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
                },
                message
            },
        ])
        setMessage('')
    }

    return (
        <footer className="h-[84px] flex items-center justify-center px-6">
            <form onSubmit={sendMessage} className="h-[44px] border rounded-full flex items-center w-full pl-[11px] pr-[8px]">
                <button type="button" className="w-[40px] h-[42px] flex items-center justify-center">
                    <Icon name="emoji" size={24} />
                </button>
                <input value={message} onChange={e => setMessage(e.target.value)} className="flex-1 outline-none h-[40px] placeholder:text-gray-500 focus:placeholder:text-gray-300 text-sm px-[9px]" placeholder="Message.." />
                {!message && (
                    <>
                        <button type="button" className="w-[40px] h-[42px] flex items-center justify-center">
                            <Icon name="picture" size={24} />
                        </button>
                        <button type="button" className="w-[40px] h-[42px] flex items-center justify-center">
                            <Icon name="heart" size={24} />
                        </button>
                    </>
                )}
                {message && <button type="submit" className="text-brand font-semibold text-sm px-3">Send</button>}
            </form>
        </footer>
    )
}