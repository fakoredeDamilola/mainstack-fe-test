// import { Line } from "react-chartjs-2"
// import { CategoryScale, Chart } from "chart.js";

// const ChartComponent:React.FC = () => {
// Chart.register(CategoryScale);
//     const data = {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [
//           {
//             label: 'My Data Set',
//             fill: true,
//             backgroundColor: 'rgba(75,192,192,0.2)',
//             borderColor: 'rgba(75,192,192,1)',
//             data: [65, 59, 80, 81, 56, 55, 40],
//           },
//         ],
//       };
//   return (
//     <Line
//   data={data}
//   options={
// //     {
// //     scales: {
// //         // @ts-ignore
// //       yAxes: [{ display: false }],
// //       // @ts-ignore
// //       xAxes: [{ display: true, categorySpacing: 0.5 }],
// //     },

// //   },

// {
//     scales: {
//     x: {
//         display: true, 
//     },
//     y: {
//         display: false
//     }
// }}
//   }
// />
//   )
// }

// export default ChartComponent

import React from 'react';
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
import { Line } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// export const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'top' as const,
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
    
//         scales: {
//     x: {
//         display: true, 
//         categorySpacing: 0.1 
//     },
//     yAxes: [{
//         gridLines: {
//           drawBorder: false,
//         },
//       }]
// }
//   },
// };

const options={
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  
    scales: {
      // to remove the labels
      x: {
        
        grid: {
          drawBorder: false,
          display: false,
        },
      },
      // to remove the y-axis labels
    //   y: {
    //     ticks: {
            
    //       display: false,
    //       beginAtZero: true,
    //     },
    //     // to remove the y-axis grid
    //     grid: {
    //     //   drawBorder: false,
    //     //   display: false,
    //     },
    //   },
    y: {
             ticks: {
            
          display: false,
          beginAtZero: true,
        },
        border:{dash: [4, 4]}, // for the grid lines
        grid: {
            color: 'red', // for the grid lines
            tickColor: 'transparent', // for the tick mark
            tickBorderDash: [2, 3], // also for the tick, if long enough
            tickWidth: 2,
            // offset: true,
            drawTicks: true, // true is default 
            drawOnChartArea: true // true is default 
        },

        // beginAtZero: true,
    },
    },
  };


    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'My Data Set',
            fill: true,
            backgroundColor: 'blue',
            borderColor: 'red',
            data: [65, 59, 80, 81, 56, 55, 40],
          },
        ],
      };

 function ChartComponent() {
  return <Line options={options} data={data} />;
}

export default ChartComponent
