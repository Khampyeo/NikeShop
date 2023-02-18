import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoNike from '../../Component/header/img/Logo_NIKE.png'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import clsx from 'clsx'
import * as yup from "yup"
import axios from 'axios'
import { BiLoaderAlt } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Dashboard from './Dashboard'


const schema = yup.object().shape({
    account: yup.string().required(),
    password: yup.string().min(4).max(15).required(),
});
export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all',
        resolver: yupResolver(schema)
    });

    const [loading, setLoading] = useState(true)
    const [isLogin, setIsLogin] = useState(false)

    const submitForm = (data) => {
        setLoading(false)
        const loginData = {
            account: data.account,
            password: data.password
        }
        function loading1Second() {
            return new Promise(resolve => {
                setTimeout(() => {
                    if (loginData.account === 'admin' && loginData.password === 'admin') {
                        resolve(true)
                    }
                    else {
                        resolve(false)
                    }
                    setLoading(true)
                }, 1000);
            });
        }
        async function asyncCall() {
            const result = await loading1Second()
            if (result === true) {
                setIsLogin(true)
            }
        }

        asyncCall();
    };
    return !isLogin ? (loading ?
        (
            <div className='mx-auto max-w-[380px] p-7 mt-[100px]'>
                <img src={LogoNike} alt="" className='w-10 mx-auto' />
                <h1 className="text-[32px] text-center py-7 font-['League_Gothic'] leading-tight">NIKE'S DASHBOARD</h1>
                <div className="">
                    <form onSubmit={handleSubmit(submitForm)}>
                        <input
                            {...register('account')}
                            type="text"
                            placeholder='Account'
                            name='account'
                            autoComplete="nope"
                            className={clsx(
                                'w-full border rounded-md px-4 py-2 outline-none text-[16px] mb-2',
                                {
                                    'border-red-600': errors.account?.message
                                }
                            )}
                        />
                        {errors.account?.message &&
                            <p className={clsx(
                                'pb-2',
                                {
                                    'text-red-600': errors.account?.message
                                }
                            )}>
                                {errors.account?.message}
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
                        <button type='submit' className="w-full bg-black text-white p-2 font-semibold rounded font-['League_Gothic'] text-[18px]">S I G N&nbsp;&nbsp;I N</button>
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
    )
    :
    (
        <div>
            <Dashboard></Dashboard>
        </div>
    )
}
