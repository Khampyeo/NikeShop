import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FavouritesHeader from '../../Component/favouritesComponent/favouritesHeader/FavouritesHeader'
import FavouritesItem from '../../Component/favouritesComponent/favouritesItem/FavouritesItem'

export default function FavouritesPage() {

  const user = useSelector(state => state.reducerUser.user)
  // const cart = useSelector(state => state.reducerUser.cart)

  const navigate = useNavigate()

  const [edit, setEdit] = useState(false)
  const [itemRemove, setItemRemove] = useState([])

  const handleSetEdit = (bool) => {
    setEdit(bool)
  }

  useEffect(() => {
    if (user.userType === 'guest') {
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const handleSetItemRemove = (id) => {
    let newListItem = itemRemove
    const checkExits = itemRemove.findIndex((element) => element === id)
    if (checkExits > -1) {
      newListItem.splice(checkExits, 1)
    }
    else {
      newListItem.push(id)
    }
    setItemRemove(newListItem)
  }
  return (
    <Fragment>
      <FavouritesHeader itemRemove={itemRemove} edit={edit} setEdit={handleSetEdit}></FavouritesHeader>
      <div
        className='lg:px-9
          w-full px-4 max-w-[1800px] mx-auto py-10'
      >
        {user.productsFavorite.length < 1 && <div className="text-center text-[24px] py-40">Items added to your Favourites will be saved here.</div>}
        <div 
          className="
            lg:grid-cols-3 
            sm:grid-cols-2
            grid grid-cols-1 gap-6
            ">
          {user.productsFavorite?.map((favourite, index) =>
            <div key={index} className=''>
              <FavouritesItem favourite={favourite} edit={edit} handleSetItemRemove={handleSetItemRemove}></FavouritesItem>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  )
}
