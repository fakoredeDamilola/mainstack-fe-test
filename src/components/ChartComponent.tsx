import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

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
        gridLines:{
          display:false,
        },
        grid: {
          drawBorder: true,
          scaleLineColor: "red",
          display: false,
        },
      },
    y: {
      gridLines:{
        display:false,
      },
             ticks: {
              maxTicksLimit: 5,
              // padding: 5,
          // display: false,
          // beginAtZero: true,
          
        },
        border:{dash: [4, 4]}, // for the grid lines
        grid: {
          scaleLineColor: "red",
            color: '#DBDEE6', // for the grid lines
            tickColor: 'transparent', // for the tick mark
            tickBorderDash: [9, 3], // also for the tick, if long enough
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
            fill: "start",
            backgroundColor: (context:any) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 80);
              gradient.addColorStop(0, "rgba(255, 84, 3, 0.2)");
              gradient.addColorStop(1, "rgb(255, 84, 3)");
              return gradient;
            },
            borderColor: '#FF5403',
            data: [65, 59, 80, 81, 56, 55, 40],
            
          },
        ],
      };

 function ChartComponent() {
  return <Line options={options} data={data} />;
}

export default ChartComponent
