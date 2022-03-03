import './SignUp.css'
import {SubmitHandler, useForm} from "react-hook-form";
import {IRegisterFields} from "./signup.interface";

const SignUp = () => {
    const { register, handleSubmit} = useForm<IRegisterFields>();
    const onSubmit:SubmitHandler<IRegisterFields> = (data) => {
        alert(`Your email ${data.email}`)
    }

    return (
        <div className="main__register">
            <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="form__title"> Регистрация </h1>
                <div className="form__group">
                    <input {...register('email')} className="form__input" type="text" placeholder=" "/>
                    <label className="form__label">Email</label>
                </div>
                <div className="form__group">
                    <input id="signup-login" className="form__input" type="text" placeholder=" "/>
                    <label className="form__label">Login</label>
                </div>
                <div className="form__group">
                    <input id="signup-pass" className="form__input" type="password" placeholder=" "/>
                    <label className="form__label">Password</label>
                </div>
                    <input type="submit"/>
            </form>

        </div>
    );
};

export default SignUp;