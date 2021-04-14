import React,{useEffect, useContext} from 'react';
import {useLocation} from 'react-router-dom'
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
  useEffect(() => {
    console.log(location)
  },[])
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
            placeholder="password"
        />
        {/* <p>{errors.password.message}</p> */}
        
        <button type="submit" className="btn-style">Kirish</button>
        </form>
     </div>
  );
};

export default Auth;

// import React,{useContext} from 'react'
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import Button from '@material-ui/core/Button';
// import { useHistory } from "react-router-dom";
// import Card from '@material-ui/core/Card';
// import './style-auth.css';

// const schema = yup.object().shape({
//     login: yup.string().required('Login kiritishda xatolik mavjud').min(4),
//     password: yup.string().required('Password kiritishda xatolik mavjud').min(4),
// });

// const Auth = () => {
//     let history = useHistory()

//     const { register, handleSubmit, errors } = useForm({
//         resolver: yupResolver(schema),
//     })
//     const onSubmit = (data) => {
//         console.log(data)
//         history.push('/')
//         history.go()
//     }

//     return (
//         <div className="container-login">
//         <Card className="container-login-card">
//             <div className="login">
//                 <form onSubmit={handleSubmit(onSubmit)}>
//                     <h2>Admin</h2>
//                     <input
//                         label="Login"
//                         type="text"
//                         name="login"
//                         placeholder="login..."
//                         ref={register}
//                     />
//                     <p>{errors.login?.message}</p>

//                     <input
//                         type="password"
//                         label="Password"
//                         name="password"
//                         placeholder="password..."
//                         ref={register}
//                     />
//                     <p>{errors.password?.message}</p>

//                     <Button 
//                         type="submit"
//                         className="btn-auth"
//                         variant="contained" 
//                         color="primary"
//                         // onClick={()=>history.push('/Buyurtmalar')}
//                     >
//                         Kirish
//                     </Button>
//                 </form>
//             </div>
//         </Card>
//     </div>
//     )
// }

// export default Auth

///*********************************
/*
import React,{useContext} from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Card from '@material-ui/core/Card';
import {StoreG} from '../Store/Store'

const schema = yup.object().shape({
    login: yup.string().required('Login kiritishda xatolik mavjud').min(4),
    password: yup.string().required('Password kiritishda xatolik mavjud').min(4),
});

const Exit = () => {

    let history = useHistory()

    const {obj} = useContext(StoreG)
    console.log(obj)

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data)
        history.push('/Buyurtmalar')
        history.go()
    }

    console.log(errors)

    return (
        <div className="container-login">
            <Card className="container-login-card">
                <div className="login">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Admin</h2>
                        <input
                            label="Login"
                            type="text"
                            name="login"
                            placeholder="login..."
                            ref={register}
                        />
                        <p>{errors.login?.message}</p>

                        <input
                            type="password"
                            label="Password"
                            name="password"
                            placeholder="password..."
                            ref={register}
                        />
                        <p>{errors.password?.message}</p>

                        <Button 
                            type="submit"
                            className="btn-auth"
                            variant="contained" 
                            color="primary"
                            // onClick={()=>history.push('/Buyurtmalar')}
                        >
                            Kirish
                        </Button>
                    </form>
                </div>
            </Card>
        </div>
    )
}

export default Exit

*/