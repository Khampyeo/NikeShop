import React from 'react'
import Projection from '../projection/Projection';
import Recent from '../recentActivity/Recent';
import Revenue from '../revenue/Revenue';
import Selling from '../selling/Selling';
import Statics from '../statics/Statics';
import TotalSales from '../totalSale/TotalSales';

export default function Main() {
  return (
    <div className='px-6 py-8 text-[#111]'>
      <div className="pb-5">
        <h1 className='text-[32px] font-semibold leading-none'>Dashoard</h1>
        <p className='mt-2'>Home <span className='text-[#777777]'>/ Dashboard</span></p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div className="grid grid-cols-2 gap-6">
          <Statics name={'Customer'} number={'36,254'} percent={'5.27'} up={true} icon={1}></Statics>
          <Statics name={'Orders'} number={'5,543'} percent={'1.08'} up={false} icon={2}></Statics>
          <Statics name={'Revenue'} number={'$6,254'} percent={'7.00'} up={false} icon={3}></Statics>
          <Statics name={'Growth'} number={'+ 30.56%'} percent={'4.87'} up={true} icon={4}></Statics>
        </div>  
        <div className="">
          <Projection></Projection>
        </div>
      </div>
      <div className="mt-6">
        <Revenue></Revenue>
      </div>
      <div className="mt-6 grid grid-cols-4 gap-6">
        <div className="col-span-2">
        <Selling></Selling>
        </div>
        <div className="">
          <TotalSales></TotalSales>
        </div>
        <div className="">
          <Recent></Recent>
        </div>
      </div>
    </div>
  )
}
