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
import { IViews } from '../pages/Dashboard/IDashboard';
import { getMonthDay } from '../utils/utils';

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
      x: {
        gridLines:{
          display:false,
        },
        grid: {
          drawBorder: true,
          // scaleLineColor: "red",
          display: false,
        },
        beginAtZero: true,
      },
    y: {
      gridLines:{
        display:false,
      },
             ticks: {
              maxTicksLimit: 6,
          
        },
        border:{dash: [4, 4]}, 
        grid: {
          scaleLineColor: "red",
            color: '#DBDEE6', 
            tickColor: 'transparent', 
            tickBorderDash: [9, 3], 
            tickWidth: 2,
            drawTicks: true, 
            drawOnChartArea: true 
        },

        // beginAtZero: true,
    },
    },
  };


   

 function ChartComponent({data}:{data:IViews}) {
  const datum = {
    labels: ["",...Object.keys(data).map(item=>getMonthDay(item))],
    datasets: [
      {
        label: 'My Data Set',
        fill: "start",
        backgroundColor: (context:any) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 80);
          gradient.addColorStop(0, "rgba(255, 84, 3, 0.2)");
          gradient.addColorStop(1, "rgba(255,84,3,0.1)");
          return gradient;
        },
        borderColor: '#FF5403',
        data: ["",...Object.values(data)],
        
      },
    ],
  };
  return <Line options={options} data={datum} />;
}

export default ChartComponent
