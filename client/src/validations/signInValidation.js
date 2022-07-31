import { object, string} from 'yup';

const SignInScheme = object({
    email: string().email('Gecerli bir mail girin').required(),
    password: string().min(6).required()
});

export default SignInScheme