import {useState} from "react";
import Header from "./header";
import Reply from "./reply";
import Messages from "./messages";

export default function Chat() {

    const user = {
        name: 'Server CETIN',
        avatar: 'https://pbs.twimg.com/profile_images/1407796331314397187/bq5jAvYu_400x400.jpg'
    }

    const [messages, setMessages] = useState([
        {
            from: {
                name: 'Server CETIN',
                username: 'servercetin',
                avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
            },
            message: 'deneme 1 2 3'
        },
        {
            from: {
                name: 'Selami',
                username: 'selami',
                avatar: 'https://pbs.twimg.com/profile_images/1532135179808083968/pMdmHcow_400x400.png'
            },
            message: 'Hayirdir noldu'
        },
        {
            from: {
                name: 'Selami',
                username: 'selami',
                avatar: 'https://pbs.twimg.com/profile_images/1532135179808083968/pMdmHcow_400x400.png'
            },
            message: 'Neden cevap vermiyorsun'
        },
        {
            from: {
                name: 'Selami',
                username: 'selami',
                avatar: 'https://pbs.twimg.com/profile_images/1532135179808083968/pMdmHcow_400x400.png'
            },
            message: 'Simdi cok sinirlendim'
        },
        {
            from: {
                name: 'Server CETIN',
                username: 'servercetin',
                avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
            },
            message: 'Neden'
        },
        {
            from: {
                name: 'Server CETIN',
                username: 'servercetin',
                avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
            },
            message: 'Muvaffakiyetsiz lestiricilestire veremeye bileceklerimizden missizcesinesin bunu biliyorsun dimi'
        },
        {
            from: {
                name: 'Server CETIN',
                username: 'servercetin',
                avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
            },
            message: 'Aloo'
        },
        {
            from: {
                name: 'Selami',
                username: 'selami',
                avatar: 'https://pbs.twimg.com/profile_images/1532135179808083968/pMdmHcow_400x400.png'
            },
            message: 'Yoo'
        },
        {
            from: {
                name: 'Selami',
                username: 'selami',
                avatar: 'https://pbs.twimg.com/profile_images/1532135179808083968/pMdmHcow_400x400.png'
            },
            message: 'Kotu laf sahibinindir'
        },
        {
            from: {
                name: 'Server CETIN',
                username: 'servercetin',
                avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
            },
            message: 'Sensin o'
        },
        {
            from: {
                name: 'Selami',
                username: 'selami',
                avatar: 'https://pbs.twimg.com/profile_images/1532135179808083968/pMdmHcow_400x400.png'
            },
            message: 'Neden boyle dusundun'
        },
        {
            from: {
                name: 'Server CETIN',
                username: 'servercetin',
                avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
            },
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vitae pretium dolor. Donec aliquam et neque vel finibus. Integer posuere pellentesque felis, vel volutpat erat euismod ac. Aenean porta mauris neque, a pharetra quam rutrum nec. Quisque blandit odio mauris, eu vehicula mauris sodales eget.'
        },
        {
            from: {
                name: 'Selami',
                username: 'selami',
                avatar: 'https://pbs.twimg.com/profile_images/1532135179808083968/pMdmHcow_400x400.png'
            },
            message: 'Ne diyorsun anlamiyorum!'
        },
    ])

    return (
        <div className="flex-1">
            <Header user={user} />
            <Messages messages={messages} />
            <Reply setMessages={setMessages} />
        </div>
    )
}