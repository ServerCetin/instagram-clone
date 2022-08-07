import Header from "../header";
import {Outlet} from "react-router-dom"

export default function MainLayout() {
    return (
        <>
            <Header/>
            <div className="lg:w-[64rem] mx-auto py-4">
                <Outlet/>
            </div>
        </>

)
}