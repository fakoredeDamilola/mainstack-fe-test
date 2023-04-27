import styled from "styled-components";
import { device } from "../config/theme";

const CardStyles = styled.div`
padding:24px;
padding-bottom:45px;
border: 1px solid #EFF1F6;
border-radius: 12px;
width:100%;
position:relative;

`
const CardStylesHeading = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
p{
    align-self:center;
    font-size:14px;
    color: #FF5403;
    cursor:pointer;

}
`
const CardStylesDetail = styled.div`
& > div:first-child{
    margin-top:42px;
}
`
const CardStylesInfo = styled.div`
gap:0px;
display:flex;
justify-content:space-between;
& >div:last-child {
    /* margin-top:62.59px; */
    position:absolute;
    bottom:64.85px;
    right:40.05px;
   width:160px;
   height:160px;
}
@media ${device.mobileM} {
       gap:20px;
  }
`
const CardStyleDetail = styled.div`
margin:19px 0;
display:flex;
gap:12px;
align-items:center;

`
const CardStyleCircle = styled.div<{color:string}>`
width:12px;
height:12px;
border-radius:50%;
background-color:${({color})=>color};
`
const CardStyleText = styled.div`
display:flex;
gap:8px;
align-items:center;
font-size:16px;
& p:last-child{
    color: #131316;
    font-weight:600;
}
`
const CardDiv = styled.div`
object-fit: cover;
    width:21px;
    height:15px;
    border-radius:3px;
`

export { CardStyles,CardStylesHeading,CardStylesDetail,CardStyleDetail,CardStyleCircle,CardStyleText,CardStylesInfo,CardDiv }