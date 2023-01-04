import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import FavoritesItem from '../favoritesItem/FavoritesItem'

export default function Favorites() {
  const user = useSelector(state => state.reducerUser.user)
  return (
    <div>
        <h1 className="text-[22px] text-[#111]">Favorites</h1>
        <div className="
          lg:grid-cols-2
          grid grid-cols-1 gap-5
          ">
            {user.productsFavorite.map((element,index)=>(
              <div key={index}>
                <FavoritesItem favourite={element}></FavoritesItem>
              </div>
            ))}

        </div>
        <Link to={'/favourites'}>
        <div className="pt-4 text-[16px] text-[#757575]">
            <p className="leading-5 border-[#757575] border-b inline-block">View more Favorites</p>
        </div>
        </Link>
    </div>
  )
}
