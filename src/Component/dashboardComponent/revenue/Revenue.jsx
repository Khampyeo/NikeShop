import React from 'react'
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Revenue() {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Current Week',
        data: [65, 59, 60, 81, 56, 89, 40],
        borderColor: 'rgb(99, 255, 104)',
        backgroundColor: 'rgb(89, 201, 87)',
        yAxisID: 'y',

      },
      {
        label: 'Previos Week',
        data: [80, 90, 70, 100, 80, 100, 60],
        borderColor: 'rgb(214, 61, 61)',
        backgroundColor: 'rgb(218, 120, 120)',
        yAxisID: 'y',

      },
    ]

  }
  const options = {
    tension: 0.3,
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart - Multi Axis',
      },
    },
    scales: {
      y: {
        grid: {
          display: false
        },
        type: 'linear',
        display: true,
        position: 'left',
        min: 0,
        max: 200,
      },
    },
  }
  return (
    <div className='grid grid-cols-3 gap-6'>
      <div className="p-6 col-span-2 rounded-lg bg-white">
        <h1 className='font-semibold text-[#6c757d]'>REVENUE</h1>
        <div className="flex justify-around bg-[#f6f7fb] py-4 my-2">
          <div className="flex flex-col justify-center items-center">
            <p>Current Week</p>
            <li className='text-[30px] text-green-400'> $58,254</li>
          </div>
          
          <div className="flex flex-col justify-center items-center">
            <p>Previous Week</p>
            <li className='text-[30px] text-red-400'> $69,524</li>
          </div>
        </div>
        <div className="relative">
          <Line className='w-full' data={data} options={options}></Line>
          <div className="absolute w-[300px] top-[20px] left-[60px]">
            <p className='text-[14px] font-semibold'>Today's Earning: $2,562.30</p>
            <p className='text-[12px] py-2 text-[#8a969c]'>Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus...</p>
            <button className='border border-[#727cf5] px-4 py-2 hover:bg-[#727cf5] hover:text-white transition-all'>View Statement</button>
          </div>
        </div>

      </div>
      <div className="p-6 bg-white rounded-lg">
        <h1 className='font-semibold text-[#6c757d]'>REVENUE BY LOCATION</h1>
        <div className="mb-4 mt-3">

        </div>
        <div className="">
          <div className="">
            <p className='text-[#6c757d]'>New York</p>
            <div className="flex w-full items-center">
              <div className="w-full h-[6px] rounded-full bg-[#777] border overflow-hidden">
                <div className="w-[72%] h-full bg-[#727cf5]"></div>
              </div>
              <p className='ml-2'>72k</p>
            </div>
          </div>
          <div className="">
            <p className='text-[#6c757d]'>San Francisco</p>
            <div className="flex w-full items-center">
              <div className="w-full h-[6px] rounded-full bg-[#777] border overflow-hidden">
                <div className="w-[39%] h-full bg-[#727cf5]"></div>
              </div>
              <p className='ml-2'>39k</p>
            </div>
          </div>
          <div className="">
            <p className='text-[#6c757d]'>Sydney</p>
            <div className="flex w-full items-center">
              <div className="w-full h-[6px] rounded-full bg-[#777] border overflow-hidden">
                <div className="w-[25%] h-full bg-[#727cf5]"></div>
              </div>
              <p className='ml-2'>25k</p>
            </div>
          </div>
          <div className="">
            <p className='text-[#6c757d]'>Singapore</p>
            <div className="flex w-full items-center">
              <div className="w-full h-[6px] rounded-full bg-[#777] border overflow-hidden">
                <div className="w-[61%] h-full bg-[#727cf5]"></div>
              </div>
              <p className='ml-2'>61k</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
