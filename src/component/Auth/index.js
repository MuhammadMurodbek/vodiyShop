import React, { useEffect, useContext } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './style-auth.css';

const schema = yup.object().shape({
    user: yup.string().required('Login kiritishda xatolik mavjud').min(4),
    password: yup.string().required('Login kiritishda xatolik mavjud').min(4),
});

const Auth = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
    const location = useLocation()
    const history = useHistory()
    useEffect(() => {
        console.log(location)
    }, [])

    const handleSubmitClick = () => {
        history.push('/main');
        history.go();
    }
    return (
        <div className="auth-wrapper">
            <form className="auth-form" onSubmit={handleSubmit((d) => console.log(d))}>
                <h3>Tizimga kirish</h3>
                <input
                    className="input-style"
                    name="login"
                    {...register("login")}
                    placeholder="login"
                />
                {/* <p>{errors.user.message}</p> */}

                <input
                    className="input-style"
                    name="password"
                    {...register("password")}
                    placeholder="parol"
                />
                {/* <p>{errors.password.message}</p> */}

                <button 
                    type="submit" 
                    className="btn-style"
                    onClick={handleSubmitClick}
                >
                    Kirish
                </button>
            </form>
        </div>
    );
};

export default Auth;

