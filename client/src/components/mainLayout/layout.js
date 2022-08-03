import Header from "../header";
import {Outlet} from "react-router-dom"

export default function MainLayout() {
    return (
        <>
            <Header/>
            <div className="max-w-5xl mx-auto py-4">
                <Outlet/>
            </div>
        </>

)
}