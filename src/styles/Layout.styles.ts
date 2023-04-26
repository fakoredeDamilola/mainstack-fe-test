import styled from "styled-components";

const AppChildren = styled.div`
box-sizing:border-box;
   padding: 0px 60px;
   padding-top:92px;
   padding-bottom:44px;
   width:calc(100%-304px);
   margin-left:304px;
`
const HeaderStyles = styled.div`
position:fixed;
left:304px;
width:calc(100%);
border:1px red solid;
height: 68px;
background: rgba(255, 255, 255, 0.9);
backdrop-filter: blur(16px);
/* display:flex;
align-items:center; */
 h3 {
letter-spacing: -0.015em;
color: ${({theme})=>theme.primaryColor};
padding-left:60px;
padding-top:22px;
 }
`
const SidebarStyles = styled.div`
background: #FFFFFF;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.04);
  transition:all 0.5s;
  z-index:18;
  border: 1px solid #EFF1F6;
    height: 100%;
    overflow-y: scroll;
    position: fixed;
    top: 0px;

    // left: 100%;
    /* transform: translateX(-100%); */
    
    transition: transform 0.3s ease-in-out;
    width: 304px;
    box-sizing: border-box;
   
    padding-bottom:300px;
    /* &.open { transform: translateX(0);   */
    
  
`
const ListStyles = styled.div`
& p:first-child{
    font-size:12px;
    color: #4D5760;
    letter-spacing:0.04em;
    font-weight:400;
    padding-left:60px;
}
`
const ListStylesChild = styled.div<{selected:boolean}>`
display:flex;
align-items:center;
gap:12px;
margin:20px 0;
padding:3px 0;
padding-left:60px;
p {
   font-size:16px; 
   cursor:pointer;
   color:${({selected})=>`${selected ? "#FF5403" : "#4D5760"}`};
   font-weight:500;
};
border-left:${({selected})=>`2px solid ${selected ?"#FF5403":"transparent"}`};
&:hover{
    border-left:2px solid #FF5403;
    p{
     color:#FF5403;   
    }
    
}
`

const SideNavFooter = styled.div`
img {
    border-radius:50%;
}
display:flex;
padding-left:60px;
gap:12px;
align-items:center;
 position:absolute;
top:808px;
font-size:15px;
color: #4D5760;
`
const ContainerStyles = styled.div`
margin-top:40px;
`
const LogoContainer = styled.div`
    margin-top:32px;
    margin-left:54px;
`

export {AppChildren,HeaderStyles,SidebarStyles,LogoContainer,ListStyles,ListStylesChild,ContainerStyles,SideNavFooter}