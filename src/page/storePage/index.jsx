import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import CategoryFilterMobile from '../../Component/storePageComponent/CategoryFilterMobile/CategoryFilterMobile'
import FilterHeader from '../../Component/storePageComponent/filterHeader/FilterHeader'
import FilterMobile from '../../Component/storePageComponent/filterMobile/FilterMobile'
import FilterNav from '../../Component/storePageComponent/filterNav/FilterNav'
import StoreBody from '../../Component/storePageComponent/storeBody/StoreBody'
import filter from './filter'
import './animation.css'


const Index = () => {
  document.title = 'Nike. Store'

  const showFilterNav = useSelector(state => state.rootReducerStorePage.showFilterNav)
  const dataOriginal = useSelector(state => state.reducerDataShoes.data)
  const type_sort = useSelector(state => state.reducerDataShoes.type_sort)

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { sort_info } = useParams()
  const { search } = useParams()

  useEffect(() => {
    if (sort_info === undefined || search === undefined) {
      navigate("/store/all/all")
    }
  }, [sort_info, search])

  const dataSearch = (search, data) => {
    let new_data = []
    if (data != null) {
      new_data = data.filter(item => item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0)
      dispatch({ type: 'DATA_SORT', payload: new_data })
    }
    return new_data
  }
  // 
  const dataFilter = (info, data) => {
    let new_data = data
    const infoArr = info.split("&").map(element => {
      const temp = element.split("=");
      const obj = {}
      obj[temp[0]] = temp[1]
      return obj;
    })
    dispatch({ type: 'TYPE_SORT', payload: infoArr })
    infoArr.forEach(element => {
      switch (Object.keys(element)[0]) {
        case 'gender':
          const genderIndex = element['gender'].split('').map((element) => Number(element))
          const gender = genderIndex.map((index) => filter.gender[index])
          if (gender.length === 3) return
          else {
            new_data = new_data?.filter(item => gender.includes(item.gender))
          }
          break;
        case 'color':
          const colorsIndex = element['color'].split('').map((element) => Number(element))
          const colors = colorsIndex.map((index) => filter.colors[index])
          if (colors.length === filter.colors.length) return
          else {
            new_data = new_data?.filter(item =>
              item.imgDetails.some(element => {
                return (colors.some(color => element.color.toLowerCase().includes(color.toLowerCase())));
              })
            )
          }
          break;
        case 'sizes':
          const sizeIndex = element['sizes'].match(/.{1,2}/g).map((element) => Number(element))
          const sizes = sizeIndex.map((index) => filter.sizes[index])
          if (sizes.length === filter.sizes.length) return
          else {
            new_data = new_data?.filter(item =>
              item.sizes.some(element => {
                return (sizes.some(size => element.size.toLowerCase().includes(size?.toString().toLowerCase())))
              })
            )
          }
          break;
        case 'shopbyprice':
          const shopByPriceIndex = element['shopbyprice'].split('').map((element) => Number(element))
          const shopByPrice = shopByPriceIndex.map((index) => filter.shopbyprice[index])
          if (shopByPrice.length === filter.shopbyprice.length) return
          else {
            new_data = new_data?.filter(item => {
              return shopByPrice.some((element)=> element.low < item.price && element.high > item.price)
            })
          }
          break;
        default:
          break;
      }
    })
    return new_data

  }
  useEffect(() => {
    const data = dataOriginal
    let new_data = data
    if (search !== 'all' && search !== undefined) {
      new_data = dataSearch(search, data)
    }
    if (sort_info !== 'all' && sort_info !== undefined) {
      new_data = dataFilter(sort_info, new_data)
    }
    else {
      dispatch({ type: 'TYPE_SORT', payload: [] })
    }
    dispatch({ type: 'DATA_SORT', payload: new_data })
  }, [search, sort_info, dataOriginal])
  return (

    <div>
      <FilterHeader />
      <div className="
        lg:hidden
        ">
        <CategoryFilterMobile></CategoryFilterMobile>
        <FilterMobile></FilterMobile>
      </div>
      <div className={`
        flex transition-all
        ${showFilterNav ? 'lg:ml-0' : 'lg:ml-[-300px]'}
        `}>
        <div className="
          lg:block
          pb-5 hidden menu-appear
          ">
          <FilterNav />
        </div>
        <StoreBody />
      </div>
    </div>
  )
}
export default Index;
