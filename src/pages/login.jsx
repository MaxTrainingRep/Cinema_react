import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(3).max(20),
}).required();

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <>
            <h1>This is login page!</h1>
            <form onSubmit={handleSubmit(data => console.log(data))}>
                <input {...register("email")} />
                {errors && errors.email ? <h4 style={{color: 'red'}}>{errors.email.message}</h4> : <></>}
                <input {...register("password")} />
                {errors && errors.password ? <h4 style={{color: 'red'}}>{errors.password.message}</h4> : <></>}
                <input type="submit" />
            </form>
        </>
    );
}

export default Login;
