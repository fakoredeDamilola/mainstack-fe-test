import { CardStyleDetail, CardStyles, CardStylesDetail, CardStylesHeading,CardStyleText,CardStyleCircle, CardStylesInfo, CardDiv } from '../styles/Component.styles'
import CardDoughnut from './CardDoughnut';

interface IData {
  source?:string;
  country?:string;
  count:number;
  percent:number;
  color:string;
  type:string;
}

interface ICard {
  title:string;
  data:IData[];
}

const Card = ({title,data}:ICard) => {
const dataChart = {
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      // backgroundColor: [
      //   'rgba(255, 99, 132, 0.2)',
      //   'rgba(54, 162, 235, 0.2)',
      //   'rgba(255, 206, 86, 0.2)',
      //   'rgba(75, 192, 192, 0.2)',
      //   'rgba(153, 102, 255, 0.2)',
      //   'rgba(255, 159, 64, 0.2)',
      // ],
      backgroundColor:data.map(datum=>datum.color),
      borderWidth: 0,
    },
  ],
};

  return (
    <CardStyles>
          <CardStylesHeading>
            <h2>{title}</h2>
            <p>View full reports</p>
        </CardStylesHeading>
        
           <CardStylesInfo>
        <CardStylesDetail>
          {data.map((item:IData,index:number)=>{
            return (
              <CardStyleDetail key={index}>
                <CardStyleText>
                {item.type==="png" ? <CardDiv><img src={`${item.source}.${item.type}`} alt={item.source} /></CardDiv> :
                <img src={`${item.source}.${item.type}`} alt={item.source} />
                }
                <p>
                  {item.source} 
                </p> <p>{item.percent}%</p>
                </CardStyleText> <CardStyleCircle color={item.color} />
                
              </CardStyleDetail>
            )
          })

          }
        </CardStylesDetail>
        <div>
            <CardDoughnut data={dataChart} /> 
        </div>
   
      </CardStylesInfo>
     
      
    </CardStyles>
  )
}

export default Card