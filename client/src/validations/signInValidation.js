import { object, string} from 'yup';

const Validations = object({
    email: string().email('Gecerli bir mail girin').required(),
    password: string().min(6).required()
});

export default Validations