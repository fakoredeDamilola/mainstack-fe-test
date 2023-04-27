import styled from "styled-components";
import { device } from "../config/theme";

const DashboardStyles = styled.div`
width:100%;
flex-grow:1;
& h3 {
    font-size:24px;
    letter-spacing: -0.015em;
    color:#131316;
}
`
const DashboardParagraph = styled.p` 
    font-size:14px;
    color: #31373d;
    margin-top:10px;
    margin-bottom:23px;
`
const DashboardGreet = styled.div`
p{
  color:#FF5403; 
  align-self:flex-end; 
  margin-top:5px;
  cursor: pointer;
}


@media ${device.mobileM} {
    margin-top:0px;
    display:flex;
justify-content:space-between;
align-items:center;    
  }
`
const DashboardFilters = styled.div`
display:flex;
flex-wrap:wrap;
gap:12px;
`
const DashboardFilter = styled.div<{selected:boolean}>`

    border: #EFF1F6;
    border-radius: 100px;
    border: ${({selected})=>`1px solid ${selected ? "#FF5403" :"#EFF1F6" }` };
    background-color: ${({selected})=>`${selected ? "#FFDDCD" :"#FFFFFF" }` };
    display:flex;
    color: ${({selected})=>`${selected ? "#FF5403" :"#31373D" }` };
    justify-content:center;
    align-items:center;
    cursor: pointer;
    transition:0.3s all;
    & p {
        font-size:14px;
        margin:12px 16px;
     }
    &:hover {
        border: 1px solid #FF5403;
    background-color: #FFDDCD;
            color: #FF5403;
    }
`
const DashboardGraphWrapper = styled.div`
margin:24px 0;
border: 1px solid #EFF1F6;
border-radius: 12px;
padding: 0 24px;
padding-top:32px;
padding-bottom:22px;
`
const DashboardGraphHeader = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
img{
  cursor:pointer;
}
`
const DashboardGraphParagraph = styled.p`
margin-top:8px;
color: #4D5760;
font-size:19px;
margin-bottom:24px;
`
const H1 = styled.h1`
font-size:48px;
color:#131316;
margin-bottom:32px;
/* font-family: 'TestSohneMono-Fett', sans-serif; */
`
const DashboardCardStyles = styled.div`
display:block;
gap:16px;
margin-bottom:44px;
& div:last-child{
 margin:20px 0; 
}

@media ${device.mobileM} {
    display:flex;
    margin:0;
    margin-bottom:44px;
    & div:last-child{
 margin: 0; 
}
  }`
export {DashboardStyles,DashboardGreet,DashboardFilter,DashboardFilters,DashboardParagraph, DashboardGraphWrapper,DashboardGraphHeader,DashboardGraphParagraph,H1, DashboardCardStyles  }