import {useNavigate, useLocation} from "react-router-dom"
import {AiFillFacebook} from "react-icons/ai";
import Input from "../../custom/Input";
import {useUser} from "../../../context/userContext";
import signInScheme from "../../../validations/signInValidation";
import {useFormik} from "formik";
import Button from "../../custom/Button";
import Separator from "../../custom/Separator";


export default function RightForm() {
    const navigate = useNavigate()
    const location = useLocation()
    const {handleLogIn,user, isLoading} = useUser()

    const {handleChange, handleSubmit, isValid, dirty, isSubmitting } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        onSubmit: async values => {

            await handleLogIn(values.email, values.password);
            user && navigate(location.state?.return_url || '/', {replace: true})

        },
        validationSchema: signInScheme
    });

    return (
        <div className="w-[350px] grid gap-y-3">

            <div className="bg-white border px-[40px] pt-10 pb-6">
                <a href="#" className="flex justify-center mb-8">
                    <img className="h-[51px]"
                         src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
                         alt=""/>
                </a>
                <form onSubmit={handleSubmit} className="grid gap-y-1.5">
                    <Input type="text" name="email" onChange={handleChange}
                           label="Phone number, username or email"/>
                    <Input type="password" name="password" onChange={handleChange}
                           label="Password"/>
                    <Button type="submit"  disabled={!isValid || !dirty || isSubmitting}>{isLoading ? "..." : " Log In"} </Button>
                    <Separator/>
                    <a href="#"
                       className="flex justify-center mb-2.5 items-center gap-x-2 text-sm font-semibold text-facebook">
                        <AiFillFacebook size={20}/>
                        Log in with Facebook
                    </a>
                    <a href="#" className="text-xs flex items-center justify-center text-link">Forgot password?</a>
                </form>
            </div>

            <div className="bg-white border p-4 text-sm text-center">
                Don't have an account? <a href="/auth/signup" className="font-semibold text-brand">Sign up</a>
            </div>

        </div>

    )
}