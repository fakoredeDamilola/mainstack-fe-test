import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive:true,
    maintainAspectRatio:false,
    height:50,
    width:50,
    cutout:"60%",
    layout: {
      padding: 0
  }
}

const CardDoughnut = ({data}:{data:any}) => {
  return (
    <Doughnut data={data} options={options} />
  )
}
export default CardDoughnut