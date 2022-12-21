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
  const showFilterNav = useSelector(state => state.rootReducerStorePage.showFilterNav)
    const dataOriginal = useSelector(state => state.reducerDataShoes.data)

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { sort_info } = useParams()
  const { search } = useParams()

  if (sort_info === undefined || search === undefined) {
    navigate("/store/all/all")
  }
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
    infoArr.forEach(element => {
      switch (Object.keys(element)[0]) {
        case 'gender':
          const genderIndex = element['gender'].split('').map((element) => Number(element))
          const gender = genderIndex.map((index) => filter.gender[index])
          if (gender.length === 3) return
          else {
            new_data = data?.filter(item => gender.includes(item.gender))
            dispatch({ type: 'DATA_SORT', payload: new_data })
          }
          break;
        case 'color':
          const colorsIndex = element['color'].split('').map((element) => Number(element))
          const colors = colorsIndex.map((index) => filter.colors[index])
          if (colors.length === filter.colors.length) return
          else {
            const new_data = data?.filter(item =>
              item.imgDetails.some(element => {
                return (colors.some(color => element.color.toLowerCase().includes(color.toLowerCase())));
              })
            )
            dispatch({ type: 'DATA_SORT', payload: new_data })
          }
          break;
        case 'sizes':
          break;
        default:
          break;
      }
    });
  }
  useEffect(() => {
    const data = dataOriginal
    let new_data = data
    if (search !== 'all' && search !== undefined) {
      console.log(search);
      new_data = dataSearch(search, data)
    }
    if (sort_info !== 'all' && sort_info !== undefined) {
      console.log(sort_info);
      dataFilter(sort_info, new_data)
    }
  }, [search, sort_info])
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
