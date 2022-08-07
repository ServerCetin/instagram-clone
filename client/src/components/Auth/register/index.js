import SignupForm from "./signupForm";
import Footer from "../../footer";

export default function Register(){
    return (
        <div className="h-full w-full  bg-main">

            <div className="flex items-center justify-center gap-x-8 py-6">
                <SignupForm />
            </div>

            <Footer/>
        </div>
    );
};

