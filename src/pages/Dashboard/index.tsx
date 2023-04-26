import { useEffect, useState } from "react"
import { DashboardCardStyles, DashboardFilter, DashboardFilters, DashboardGraphHeader, DashboardGraphParagraph, DashboardGraphWrapper, DashboardGreet, DashboardParagraph, DashboardStyles, H1 } from "../../styles/Dashboard.styles"
import { dashboardDays} from "../../utils/Links"
import ChartComponent from "../../components/ChartComponent"
import Card from "../../components/Card"
import { getRandomColor } from "../../utils/utils"
import { IData } from "./IDashboard"


const index = () => {

  const [selected,setSelected] = useState("1")
  const [resData,setResData] = useState<IData | null>()
const fetchData = async ()=>{
  const data = await fetch("https://fe-task-api.mainstack.io")
  const res = await data.json()
  console.log({res})
  setResData(res)
}

  useEffect(()=>{
    fetchData()
  },[])
 
  return (
    <DashboardStyles>
      <DashboardGreet>
         <h3>Good morning, Blessing ⛅️</h3>
        <p>View analytics</p>
      </DashboardGreet>
     
      <DashboardParagraph>Check out your dashboard summary.</DashboardParagraph>
      <DashboardFilters>
      {dashboardDays.map((days,index)=>{
        return (
          <DashboardFilter key={index} selected={days.value ===selected ? true : false} onClick={()=>setSelected(days.value)}>
            <p>{days.text}</p>
          </DashboardFilter>
        )
      })

      }
      </DashboardFilters>
      <DashboardGraphWrapper>
        <DashboardGraphHeader>
          <h2>Page Views</h2>
          <img src="/info.svg" alt="info" />
        </DashboardGraphHeader>
        <DashboardGraphParagraph>
        All time
        </DashboardGraphParagraph>
        <H1>500</H1>
        {resData && <ChartComponent data={resData?.graph_data?.views} />}
      </DashboardGraphWrapper>
     {resData && <DashboardCardStyles>
      <Card title="Top Locations" data ={resData?.top_locations.map(item=>{
        return {source:item.country,count:item.count,percent:item.percent,color:getRandomColor(),type:"png"}
      })} />
      <Card title="Top Referral source"  data ={resData.top_sources.map(item=>{
        return {source:item.source,count:item.count,percent:item.percent,color:getRandomColor(),type:"svg"}
      })}/>
      </DashboardCardStyles>}
    </DashboardStyles>
  )
}

export default index