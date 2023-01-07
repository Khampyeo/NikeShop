import React, { useEffect } from 'react'
import LogoNike from '../header/img/Logo_NIKE.png'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import clsx from 'clsx'
import * as yup from "yup"
import { useState } from 'react'
import { BsCheck } from "react-icons/bs";
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BiLoaderAlt } from "react-icons/bi";
import RegisterNotification from './RegisterNotification'


const schema = yup.object().shape({
    name: yup.string().min(4).max(15).required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(15).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], 'Password not match!'),
    age: yup.date().required(),
    gender: yup.string().required().typeError('Please select a preference.')
});

export default function RegisterForm() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(true)
    const [openNotification, setOpenNotification] = useState(false)

    const [gender, setGender] = useState(-1)
    const user = useSelector(state => state.reducerUser.user)

    const navigate = useNavigate()
    useEffect(() => {
        if (user.userType != 'guest') {
            navigate('/')
        }
    }, [user])

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'all',
        resolver: yupResolver(schema)
    });

    const submitForm = (data) => {
        const date = new Date()
        const new_user = {
            "name": data.name,
            "email": data.email,
            "password": data.password,
            "age": date.getFullYear() - data.age.getFullYear(),
            "userType": "user"
        }
        const registerNewUser = async (new_user) => {
            setLoading(true)
            const res = await axios.post('https://nike-sever-vtcoder.glitch.me/users/create', new_user)
                .then(res => {
                    setSuccess(true)
                })
                .catch(function (error) {
                    setSuccess(false)
                });
            setLoading(false)
            setOpenNotification(true)
        }
        registerNewUser(new_user)
    };

    return (
        loading ?
            (
                <div className="w-full h-[70vh] flex justify-center items-center">
                    <BiLoaderAlt className='text-[50px] text-[#111111] animate-spin'></BiLoaderAlt>
                </div>
            )
            :
            (
                <div className='mx-auto max-w-[380px] p-7'>
                    <img src={LogoNike} alt="" className='w-10 mx-auto' />
                    <h1 className="text-[32px] text-center py-7 font-['League_Gothic'] leading-tight">BECOME A NIKE MEMBER</h1>
                    <div className="text-[14px] text-[#8d8d8d] text-center">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</div>
                    <div className="">
                        <form onSubmit={handleSubmit(submitForm)}>
                            <input
                                {...register('email')}
                                type="text"
                                placeholder='Email Address'
                                name='email'
                                autoComplete="nope"
                                className={clsx(
                                    'w-full border rounded-md px-4 py-2 outline-none mt-2',
                                    {
                                        'border-red-600': errors.email?.message
                                    }
                                )}
                            />
                            {errors.email?.message &&
                                <p className={clsx(
                                    '',
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
                                    'w-full border rounded-md px-4 py-2 outline-none mt-2',
                                    {
                                        'border-red-600': errors.password?.message
                                    }
                                )}
                            />
                            {errors.password?.message &&
                                <p className='text-red-600 '>
                                    {errors.password?.message}
                                </p>
                            }
                            <input
                                {...register('confirmPassword')}
                                type="password"
                                placeholder='Confirm Password'
                                name='confirmPassword'
                                autoComplete="nope"
                                className={clsx(
                                    'w-full border rounded-md px-4 py-2 outline-none mt-2',
                                    {
                                        'border-red-600': errors.confirmPassword?.message
                                    }
                                )}
                            />
                            {errors.confirmPassword?.message &&
                                <p className='text-red-600 '>
                                    {errors.confirmPassword?.message}
                                </p>
                            }
                            <input
                                {...register('name')}
                                type="text"
                                placeholder='Name'
                                name='name'
                                autoComplete="nope"
                                className={clsx(
                                    'w-full border rounded-md px-4 py-2 outline-none mt-2',
                                    {
                                        'border-red-600': errors.name?.message
                                    }
                                )}
                            />
                            {errors.name?.message &&
                                <p className=' text-red-600'>
                                    {errors.name?.message}
                                </p>
                            }
                            <input
                                {...register('age')}
                                type="date"
                                placeholder='Date Of Birth'
                                name='age'
                                autoComplete="nope"
                                className={clsx(
                                    'w-full border rounded-md px-4 py-2 outline-none mt-2',
                                    {
                                        'border-red-600': errors.age?.message
                                    }
                                )}
                            />
                            {errors.age?.message &&
                                <p className=' text-red-600'>
                                    {errors.age?.message && 'Date must require'}
                                </p>
                            }
                            <div className="grid grid-cols-3 gap-1 text-[16px] text-[#8d8d8d] mt-2">
                                <div className="relative">
                                    <input
                                        {...register('gender')}
                                        id='male'
                                        name='gender'
                                        value='male'
                                        type="radio"
                                        className='absolute opacity-0'
                                        onClick={() => setGender(1)}
                                    />
                                    <label
                                        htmlFor="male"
                                        className={`
                                    border w-full h-10 flex justify-center items-center rounded
                                    ${gender === 1 && 'border-black text-[#111]'}
                                    `}
                                    >
                                        <BsCheck className={gender === 1 ? 'block text-[20px] text-[#111]' : 'hidden'}></BsCheck>Male
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        {...register('gender')}
                                        id='female'
                                        name='gender'
                                        value='female'
                                        type="radio"
                                        className='absolute opacity-0'
                                        onClick={() => setGender(2)}
                                    />
                                    <label
                                        htmlFor="female"
                                        className={`
                                    border w-full h-10 flex justify-center items-center rounded
                                    ${gender === 2 && 'border-black text-[#111]'}
                                `}
                                    >
                                        <BsCheck className={gender === 2 ? 'block text-[20px] text-[#111]' : 'hidden'}></BsCheck>Female
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        {...register('gender')}
                                        id='other'
                                        name='gender'
                                        value='other'
                                        type="radio"
                                        className='absolute opacity-0'
                                        onClick={() => setGender(3)}
                                    />
                                    <label
                                        htmlFor="other"
                                        className={`
                                    border w-full h-10 flex justify-center items-center rounded
                                    ${gender === 3 && 'border-black text-[#111]'}
                                 `}
                                    >
                                        <BsCheck className={gender === 3 ? 'block text-[20px] text-[#111]' : 'hidden'}></BsCheck>Other
                                    </label>
                                </div>
                            </div>
                            {errors.gender?.message &&
                                <p className={clsx(
                                    '',
                                    {
                                        'text-red-600': errors.gender?.message
                                    }
                                )}>
                                    {errors.gender?.message}
                                </p>
                            }
                            <div className="flex items-center text-[12px] text-[#8d8d8d] mt-2">
                                <div className="flex-1 w-5 h-5 mr-3">
                                    <input
                                        {...register('checkbox')}
                                        type="checkbox"
                                        value={true}
                                        className='flex-1 text-[#8d8d8d]  w-5 h-5'
                                    />
                                </div>
                                <p >Sign up for emails to get updates from Nike on products, offers and your Member benefits</p>
                            </div>
                            <p className='text-[12px] text-center py-4 text-[#8d8d8d]'>By creating an account, you agree to Nike's Privacy Policy and Terms of Use.</p>
                            <button type='submit' className="w-full bg-black text-white p-2 mt-4 font-semibold rounded font-['League_Gothic'] text-[18px]">J O I N&nbsp;&nbsp;U S</button>
                            <p className='text-center text-[#8d8d8d] text-[12px] my-5 flex justify-center'>Not a Member? Sign up.</p>
                        </form>
                    </div>
                    {openNotification && <RegisterNotification success={success} setNotification={()=>setOpenNotification(false)}></RegisterNotification>}
                </div>
            )
    )
}
