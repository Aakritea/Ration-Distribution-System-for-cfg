import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Stats2 from './Stats2';
ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
  labels: ['Rice', 'Oil', 'Tea', 'Dal', 'Pulses'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

function Stats() {
  return(
    <div className='row justify-content-around mt-3 mb-3'>
      <div className='col-sm-6'>
      <Pie data={data} className="mx-auto"/>
      </div>

      <div className='col-sm-6'>
      {/* <Pie data={data} className="mx-auto"/> */}
      <Stats2/>

      </div>
    </div>
  
  )
}

export default Stats;