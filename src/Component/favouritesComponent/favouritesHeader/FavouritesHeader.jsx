import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function FavouritesHeader({ itemRemove, edit, setEdit }) {
    const [lastScrollY, setLastScrollY] = useState(0);
    const [show, setShow] = useState(true);

    const cart = useSelector(state => state.reducerUser.cart)
    const user = useSelector(state => state.reducerUser.user)
    const dispatch = useDispatch()

    const updateFavourite = () => {
        let new_favourites = user.productsFavorite
        new_favourites = new_favourites.filter((element) => !itemRemove.includes(element.productId))
        const new_user = { ...user, productsFavorite: new_favourites }
        dispatch({ type: 'USER', payload: new_user })
        localStorage.setItem(user._id, JSON.stringify({ cart, favourites: new_favourites }));
    }

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > 32 && window.scrollY > lastScrollY) {
                setShow(false);
            } else {
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);
    return (
        <div className={`
            lg:px-11
            px-4 bg-white sticky transition-all z-10
            ${show ? 'top-[60px]' : 'top-0'}
        `}>
            <div className="flex justify-between items-center text-[#111] pt-6 pb-2">
                <h1 className={`
                        transition-all duration-500
                        ${window.pageYOffset > 10 ? 'text-[20px]' : 'text-[28px]'}
                `}>
                    {edit ? 'Manage Your Favourites' : 'Favourites'}
                </h1>
                {user.productsFavorite.length > 0 && <div className="">
                    {edit ?
                        <button
                            className='flex justify-center bg-black text-white items-center border py-2 px-6 rounded-[20px] border-[#cccccc]'
                            onClick={() => {
                                setEdit(false)
                                updateFavourite()
                            }}>
                            Done
                        </button>
                        :
                        <button
                            className='flex justify-center items-center border py-2 px-6 rounded-[20px] border-[#cccccc]'
                            onClick={() => setEdit(true)}
                        >
                            Edit
                        </button>
                    }
                </div>}
            </div>
        </div>
    )
}
