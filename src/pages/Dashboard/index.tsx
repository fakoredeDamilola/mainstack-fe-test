import { useState } from "react"
import { DashboardCardStyles, DashboardFilter, DashboardFilters, DashboardGraphHeader, DashboardGraphParagraph, DashboardGraphWrapper, DashboardGreet, DashboardParagraph, DashboardStyles, H1 } from "../../styles/Dashboard.styles"
import { dashboardDays, recognizedCountries } from "../../utils/Links"
import ChartComponent from "../../components/ChartComponent"
import Card from "../../components/Card"
import { getRandomColor } from "../../utils/utils"


const index = () => {
  const [selected,setSelected] = useState("1")
  const data ={
    "graph_data": {
      "views": {
        "2022-07-31": 1,
        "2022-08-01": 3,
        "2022-08-02": 3,
        "2022-08-03": 7,
        "2022-08-04": 8,
        "2022-08-05": 5,
        "2022-08-06": 20,
        "2022-08-07": 50,
        "2022-08-08": 100,
        "2022-08-09": 2
      }
    },
    "top_locations": [
      {
        "country": "Nigeria",
        "count": 68,
        "percent": 34
      },
      {
        "country": "Germany",
        "count": 37,
        "percent": 19
      },
      {
        "country": "Ghana",
        "count": 50,
        "percent": 25
      },
      {
        "country": "Finland",
        "count": 40,
        "percent": 20
      },
      {
        "country": "United Kingdom",
        "count": 4,
        "percent": 2
      }
    ],
    "top_sources": [
      {
        "source": "google",
        "count": 50,
        "percent": 25
      },
      {
        "source": "instagram",
        "count": 68,
        "percent": 34
      },
      {
        "source": "facebook",
        "count": 40,
        "percent": 20
      },
      {
        "source": "linkedin",
        "count": 41,
        "percent": 21
      }
    ]
  }
  return (
    <DashboardStyles>
      <DashboardGreet>
         <h3>Good morning, Blessing ⛅️</h3>
        <p>View  analytics</p>
      </DashboardGreet>
     
      <DashboardParagraph>Check out your dashboard summary.</DashboardParagraph>
      <DashboardFilters>
      {dashboardDays.map((days,index)=>{
        return (
          <DashboardFilter key={index} selected={days.value ===selected ? true : false} >
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
        <ChartComponent />
      </DashboardGraphWrapper>
      <DashboardCardStyles>
      <Card title="Top Locations" data ={data.top_locations.map(item=>{
        return {source:item.country,count:item.count,percent:item.percent,color:getRandomColor(),type:"png"}
      })} />
      <Card title="Top Referral source"  data ={data.top_sources.map(item=>{
        return {source:item.source,count:item.count,percent:item.percent,color:getRandomColor(),type:"svg"}
      })}/>
      </DashboardCardStyles>
    </DashboardStyles>
  )
}

export default index