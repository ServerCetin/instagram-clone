import LeftPhone from "./components/notLoggedIn/leftPhone/leftPhone";
import RightForm from "./components/notLoggedIn/rightForm/rightForm";

function App() {


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
            </div>
        </div>
    );
}

export default App;
