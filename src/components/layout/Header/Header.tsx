import { HeaderBar, HeaderBars, HeaderStyles } from "../../../styles/Layout.styles";

const Header = ({showSidebar,setShowSideBar}:{
    showSidebar:boolean;
    setShowSideBar:React.Dispatch<React.SetStateAction<boolean>>
}) => {
  return (
    <HeaderStyles>
   <h3>Dashboard</h3>  
   <HeaderBars onClick={()=>setShowSideBar(!showSidebar)}>
    <HeaderBar />
    <HeaderBar />
    <HeaderBar />
   </HeaderBars>
    </HeaderStyles>
   
  )
}

export default Header