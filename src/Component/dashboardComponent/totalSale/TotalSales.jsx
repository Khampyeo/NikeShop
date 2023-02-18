import React from 'react'
import { BsDownload, BsThreeDotsVertical } from "react-icons/bs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '# of Votes',
            data: [12, 19, 3, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                '#ff6384',
                '#36a2eb',
                '#ffce56',
                '#4bc0c0',
            ],
            borderWidth: 1,
        },
    ],
};
export default function TotalSales() {
    const options = {
        plugins: {
            legend: {
                position: 'bottom',
                display: false
            },
            datalabels: {
                borderColor: 'white',
                borderRadius: 25,
                borderWidth: 2,
                color: 'white',
                display: function (context) {
                    var dataset = context.dataset;
                    var count = dataset.data.length;
                    var value = dataset.data[context.dataIndex];
                    return value > count * 1.5;
                },
                font: {
                    weight: 'bold'
                },
            }
        }
    }
    return (
        <div className='py-[18px] px-6 bg-white rounded-lg h-full'>
            <div className="flex justify-between items-center">
                <h1 className='py-1 font-semibold text-[#6c757d]'>TOTAL SALES</h1>
                <BsThreeDotsVertical></BsThreeDotsVertical>
            </div>
            <div className="mt-[18px]">
                <div className="flex justify-center">
                    <Doughnut className='w-[90%]' data={data} options={options} />
                </div>
                <div className="mt-6">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="h-4 w-4 bg-[#ff6384]"></div>
                            <p className='ml-1'>Direct</p>
                        </div>
                        <p>$300.56</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                            <div className="h-4 w-4 bg-[#36a2eb]"></div>
                            <p className='ml-1'>Affilliate</p>
                        </div>
                        <p>$135.18.56</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                            <div className="h-4 w-4 bg-[#ffce56]"></div>
                            <p className='ml-1'>Sponsored</p>
                        </div>
                        <p>$48.96.56</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center">
                            <div className="h-4 w-4 bg-[#4bc0c0]"></div>
                            <p className='ml-1'>E-mail</p>
                        </div>
                        <p>$154.02
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
