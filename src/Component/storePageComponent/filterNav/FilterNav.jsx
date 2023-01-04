import React from 'react'
import { useSelector } from 'react-redux'
import ColourFilter from '../colour/ColourFilter'
import FilterCheckBox from '../filterCheckBox/FilterCheckBox'
import FilterRadio from '../filterRadio/FilterRadio'
import Size from '../size/Size'
import './scrollbar.css'

export default function FilterNav() {
    const category = ['Lifestyle', 'Jordan', 'Running', 'Basketball', 'Training & Gym', 'Football', 'Skateboarding', 'Golf', 'Boots', 'Tennis', 'Athletics', 'Walking']

  return (
    <div className='
      w-[300px] h-[100vh] pl-12 pr-2 overflow-y-scroll pb-[100px] sticky top-[50px] bg-white filterNav-scrollbar
      '>
      <div className="text-[16px] pb-5">
        {category.map((name, index) => (
          <p key={index} className='py-1'>{name}</p>
          ))}
      </div>
      <FilterCheckBox name='Gender' arr={['Men', 'Women', 'Kids']}></FilterCheckBox>
      <FilterCheckBox name='Shop By Price' arr={['Under 1,000,000đ', '1,001,000đ - 2,000,000đ', '2,001,000đ - 4,000,000đ', 'Above 4,001,000đ']}></FilterCheckBox>
      <Size></Size>
      <ColourFilter></ColourFilter>
      <FilterCheckBox name='Brand' arr={['Nike Sportswear', 'Jordan', 'Nike By You', 'NikeLab', 'ACG']}></FilterCheckBox>
      <FilterCheckBox name='Air Max' arr={['Air Max 1', 'Air Max 90', 'Air Max 95', 'Air Max 97', 'Air Max 270', 'Air Max Plus']}></FilterCheckBox>
      <FilterCheckBox name='Show Height' arr={['Low Top', 'Mid Top', 'High Top']}></FilterCheckBox>
    </div>
  )
}
