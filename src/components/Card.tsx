import { ILocation } from '../pages/Dashboard/IDashboard';
import { CardStyleDetail, CardStyles, CardStylesDetail, CardStylesHeading,CardStyleText,CardStyleCircle, CardStylesInfo, CardDiv } from '../styles/Component.styles'
import CardDoughnut from './CardDoughnut';

interface IData extends ILocation {
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
      
      data: data.map(datum=>datum.percent),
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