import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
    phone: yup.string().required().min(8).max(12),
    email: yup.string().required().email(),
    confirmEmail: yup.string().required().email().oneOf([yup.ref('email'), null], 'Emails must match'),
    firstName: yup.string().min(2),
    lastName: yup.string().min(2),
    password: yup.string().required().min(8).max(30),
    confirmPassword: yup.string().required().min(8).max(30).oneOf([yup.ref('password'), null], 'Passwords must match'),
}).required();

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    return (
        <form style={{display: 'flex', flexDirection: 'column', width: '300px', marginLeft: 130}} onSubmit={handleSubmit(data => console.log(data))}>

            <h3>Phone:</h3>
            <input {...register("phone")} />
            {errors && errors.phone ? <h4 style={{color: 'red'}}>{errors.phone.message}</h4> : <></>}

            <h3>Email:</h3>
            <input {...register("email")} />
            {errors && errors.email ? <h4 style={{color: 'red'}}>{errors.email.message}</h4> : <></>}

            <h3>Confirm email:</h3>
            <input {...register("confirmEmail")} />
            {errors && errors.confirmEmail ? <h4 style={{color: 'red'}}>{errors.confirmEmail.message}</h4> : <></>}

            <h3>First name:</h3>
            <input {...register("firstName")} />
            {errors && errors.firstName ? <h4 style={{color: 'red'}}>{errors.firstName.message}</h4> : <></>}

            <h3>Last name:</h3>
            <input {...register("lastName")} />
            {errors && errors.lastName ? <h4 style={{color: 'red'}}>{errors.lastName.message}</h4> : <></>}

            <h3>Password:</h3>
            <input type="password" {...register("password")} />
            {errors && errors.password ? <h4 style={{color: 'red'}}>{errors.password.message}</h4> : <></>}

            <h3>Confirm password:</h3>
            <input type="password" {...register("confirmPassword")} />
            {errors && errors.confirmPassword ? <h4 style={{color: 'red'}}>{errors.confirmPassword.message}</h4> : <></>}

            <input type="submit" />
        </form>
    );
}

export default SignUp;
