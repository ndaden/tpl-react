import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
    firstname: Yup.string()
                    .required('ce champ est obligatoire'),
    lastname: Yup.string()
                    .required('ce champ est obligatoire'),
    phonenumber: Yup.string()
                    .required('ce champ est obligatoire'),
    email: Yup.string()
                    .required('ce champ est obligatoire'),
});

export default SignUpSchema;
