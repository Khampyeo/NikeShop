import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)


export default function Projection() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Actual',
                data: [65, 59, 60, 81, 56, 89, 40, 32, 65, 59, 80, 81],
                backgroundColor: 'rgb(99, 213, 255)',
                barThickness: 4
            },
            {
                label: 'Projection',
                data: [80, 90, 70, 100, 80, 100, 60, 70, 80, 90, 100, 100],
                backgroundColor: 'rgb(144, 151, 151)',
                barThickness: 4

            },
        ]

    }
    const options = {
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: (item) =>
                        `${item.dataset.label}: $${item.formattedValue}k`,
                },
            },
        },

        responsive: true,
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false
                  }
            },
            y: {
                stacked:true,
                ticks: {
                    callback: function (value, index, ticks) {
                        return value + 'k';
                    }
                },
                
            }
        },
    }
    return (
        <div className='p-6 bg-white rounded-lg h-[100%]'>
            <h1 className='text-[#6c757d] font-semibold mb-5'>PROJECTIONS VS ACTUALS</h1>
            <Bar data={data} options={options}></Bar>
        </div>
    )
}
