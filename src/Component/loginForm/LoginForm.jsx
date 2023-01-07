import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoNike from '../header/img/Logo_NIKE.png'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import clsx from 'clsx'
import * as yup from "yup"
import axios from 'axios'
import { BiLoaderAlt } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
});

export default function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all',
        resolver: yupResolver(schema)
    });

    const [loading, setLoading] = useState(true)
    const user = useSelector(state => state.reducerUser.user)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (user.userType != 'guest') {
            navigate('/')
        }
    }, [user])
    const submitForm = (data) => {
        setLoading(false)
        const loginData = {
            email: data.email,
            password: data.password
        }
        const Login = async (loginData) => {
            const res = await axios.post('https://nike-sever-vtcoder.glitch.me/users/login', loginData)
                .then((response) => {
                    const new_data = {
                        user: { ...response.data.user },
                        token: response.data.token
                    }
                    const userData = JSON.parse(localStorage.getItem(new_data.user._id))
                    if (userData) {
                        dispatch({ type: 'CART', payload: userData.cart })
                        console.log(userData);
                        new_data.user.productsFavorite = userData.favourites
                    }
                    else {
                        dispatch({ type: 'CART', payload: [] })
                    }
                    dispatch({ type: 'USER', payload: new_data.user })
                    dispatch({ type: 'TOKEN', payload: new_data.token })
                    dispatch({ type: 'STATUS', payload: 'login' })
                    navigate('/homepage')
                    if (data.checkbox == 'true') {
                        const data_local = {
                            email: data.email,
                            password: (data.password)
                        }
                        localStorage.setItem("user", window.btoa(JSON.stringify(data_local)));
                    }
                })
                .catch(function (error) {
                    alert(error);
                });
            setLoading(true)
        }
        Login(loginData)
    };
    return loading ?
        (
            <div className='mx-auto max-w-[380px] p-7'>
                <img src={LogoNike} alt="" className='w-10 mx-auto' />
                <h1 className="text-[32px] text-center py-7 font-['League_Gothic'] leading-tight">YOUR ACCOUNT FOR EVERYTHING NIKE</h1>
                <div className="">
                    <form onSubmit={handleSubmit(submitForm)}>
                        <input
                            {...register('email')}
                            type="text"
                            placeholder='Email Address'
                            name='email'
                            autoComplete="nope"
                            className={clsx(
                                'w-full border rounded-md px-4 py-2 outline-none text-[16px] mb-2',
                                {
                                    'border-red-600': errors.email?.message
                                }
                            )}
                        />
                        {errors.email?.message &&
                            <p className={clsx(
                                'pb-2',
                                {
                                    'text-red-600': errors.email?.message
                                }
                            )}>
                                {errors.email?.message}
                            </p>
                        }
                        <input
                            {...register('password')}
                            type="password"
                            placeholder='Password'
                            name='password'
                            autoComplete="nope"
                            className={clsx(
                                'w-full border rounded-md px-4 py-2 outline-none',
                                {
                                    'border-red-600': errors.password?.message
                                }
                            )}
                        />
                        {errors.password?.message &&
                            <p className={clsx(
                                'py-2',
                                {
                                    'text-red-600': errors.password?.message
                                }
                            )}>
                                {errors.password?.message}
                            </p>
                        }

                        <div className="flex text-[12px] justify-between my-6">
                            <div className="flex items-center">
                                <input
                                    {...register('checkbox')}
                                    type="checkbox"
                                    value={true}
                                    className='text-[#8d8d8d] mr-2 w-4 h-4'
                                />
                                Keep me signed in
                            </div>
                            <Link><p className="text-[#bcbcbc]">Forgotten your password?</p></Link>
                        </div>
                        <p className='text-[12px] px-3 text-center pb-6 text-[#8d8d8d]'>By logging in, you agree to Nike's <a href="" className='underline'>Privacy Policy</a> and <a href="" className='underline'>Terms of Use</a>.</p>
                        <button type='submit' className="w-full bg-black text-white p-2 font-semibold rounded font-['League_Gothic'] text-[18px]">S I G N&nbsp;&nbsp;I N</button>
                        <p className='text-center text-[#8d8d8d] text-[12px] my-5 flex justify-center'>Not a Member?&nbsp;
                            <a className='underline text-[#111]'>Join Us</a>.</p>
                    </form>
                </div>
            </div>
        )
        :
        (
            <div className="w-full h-[70vh] flex justify-center items-center">
                <BiLoaderAlt className='text-[50px] text-[#111111] animate-spin'></BiLoaderAlt>
            </div>
        )
}
