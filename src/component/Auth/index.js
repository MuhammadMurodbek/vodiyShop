import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import LockIcon from "@material-ui/icons/Lock";
import Loader from "react-loader-spinner";
import "./style-auth.css";
import axios from "axios";

const Auth = () => {
    const [loader, setLoader] = useState(false)
    const history = useHistory()
    const [user, setUser] = useState({
        login: "",
        password: "",
    });

    const onChangeInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const loginSubmit = (e) => {
        e.preventDefault()
        setLoader(true)
        axios.post('https://jsonplaceholder.typicode.com/posts', { user })
            .then((res) => {
                console.log(res)
                history.push('/main')
                history.go()
                setLoader(false)
            })
            .catch((error) => {
                console.error(error)
                setLoader(false)
            })
    };

    return (
        <div className="auth-wrapper" method="post">

            <form className="auth-form" onSubmit={loginSubmit}>
                <span className="auth-form-icon-wrapper">
                    <LockIcon color="secondary" fontSize="large" />
                </span>
                <h3>Tizimga kirish</h3>
                {loader ? (<Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height={30}
                    width={30}
                    timeout={3000} //3 secs
                />) : null}
                <input
                    name="login"
                    placeholder="login"
                    className="input-style"
                    onChange={onChangeInput}
                    minLength="3"
                    required
                />
                <input
                    name="password"
                    placeholder="parol"
                    className="input-style"
                    onChange={onChangeInput}
                    minLength="3"
                    required
                />
                <button
                    type="submit"
                    className="btn-style"
                // onClick={handleSubmitClick}
                >
                    Kirish
        </button>
            </form>
        </div>
    );
};

export default Auth;