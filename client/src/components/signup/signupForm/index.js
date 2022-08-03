import {useNavigate, useLocation} from "react-router-dom"
import {AiFillFacebook} from "react-icons/ai";
import Input from "../../custom/Input";
import {useUser} from "../../../context/userContext";
import signUpScheme from "../../../validations/signUpValidation";
import {useFormik} from "formik";
import Button from "../../custom/Button";
import Separator from "../../custom/Separator";


export default function SignupForm() {
    const navigate = useNavigate()
    const location = useLocation()
    const {user, handleSignUp} = useUser()

    const {handleChange, handleSubmit, isValid, dirty, isSubmitting} = useFormik({
        initialValues: {
            email: '',
            password: '',
            full_name: '',
            username: ''
        },

        onSubmit: async values => {
            const response = await handleSignUp(values)
            if (response) {
                navigate(location.state?.return_url || '/', { //FIXME sign up'tan sonra ana sayfaya yonlendirmiyor user gec geldigi icin
                    replace: true
                })
                console.log(user)
            }
        },
        validationSchema: signUpScheme
    });

    return (
        <div className="w-[350px] grid gap-y-3">

            <div className="bg-white border px-[40px] pt-10 pb-6">
                <a href="#" className="flex justify-center mb-3">
                    <img className="h-[51px]"
                         src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
                         alt=""/>
                </a>
                <p className="text-gray-400 font-medium text-center mb-5">Sign up to see photos and videos from your
                    friends.</p>
                <Button type='submit'><AiFillFacebook size={20}/> Log in with Facebook</Button>
                <Separator/>

                <form onSubmit={handleSubmit} className="grid gap-y-1.5">
                    <Input type="text" name="email" onChange={handleChange} label="Mobile Number or Email"/>
                    <Input type="text" name="full_name" onChange={handleChange} label="Full Name"/>
                    <Input type="text" name="username" onChange={handleChange} label="Username"/>
                    <Input type="password" name="password" onChange={handleChange} label="Password"/>
                    <p className="text-xs py-2 text-gray-400 text-center">People who use our service may have uploaded
                        your
                        contact information to Instagram.
                        <a className="font-bold" href="#"> Learn More</a>
                    </p>
                    <p className="text-xs py-2 text-gray-400  text-center">By signing up, you agree to our
                        <a className="font-bold" href="#"> Terms </a>,
                        <a className="font-bold" href="#"> Privacy Policy </a> and
                        <a className="font-bold" href="#"> Cookies Policy </a>
                    </p>

                    <Button type='submit' disabled={!isValid || !dirty || isSubmitting}> Sign Up</Button>
                </form>
            </div>

            <div className="bg-white border p-4 text-sm text-center">
                Have an account? <a href="/auth/login" className="font-semibold text-brand"> Log In</a>
            </div>

        </div>

    )
}