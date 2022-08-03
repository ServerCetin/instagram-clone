import { object, string} from 'yup';

const signUpScheme = object({
    full_name: string().min(3,"min 3 char girmeniz lazim").required(),
    username: string().min(3,"min 3 char girmeniz lazim").required().test({
        message: 'Geçerli bir kullanıcı adı girin',
        test: str => /^[a-z\d._]+$/i.test(str)
    }),
    email: string().email('Gecerli bir mail girin').required(),
    password: string().min(6).required()
});

export default signUpScheme