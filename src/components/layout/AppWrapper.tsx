
import { useState } from "react";
import Header from "./Header/Header";
import Sidebar from "./SideBar/Sidebar";
import { AppChildren } from "../../styles/Layout.styles";
export default function AppWrapper({children}:{children : React.ReactNode}) {

  const [showSideBar,setShowSideBar] = useState(false)

  return (
     <>
        <Header 
        showSidebar={showSideBar}
        setShowSideBar={setShowSideBar}
        
        />
        <Sidebar showSideBar={showSideBar}/>
        <AppChildren>
          {children}
        </AppChildren>
     </> 
  )
}
