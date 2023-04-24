import { ContainerStyles, ListStyles, ListStylesChild, LogoContainer, SidebarStyles } from "../../../styles/Layout.styles"
import { IChild, ILinks, listLinks } from "../../../utils/Links"
import Logo from "../../Logo"

const Sidebar = ({showSideBar}:{showSideBar:boolean}) => {
  return (
    <SidebarStyles>
      <LogoContainer>
         <Logo />
      </LogoContainer>
      <ContainerStyles>
          {listLinks.map((item:ILinks,index)=>{
        return (
          <ListStyles key={index}>
            {item.parent &&<p>{item.parent}</p>}
            {item.children.map((child:IChild,key:number) =>{
              return (
                <ListStylesChild key={key} selected={child.link === "/" ? true: false}>
                  <img src={`${child.icon}.svg`} /> <p>{child.name}</p>
                </ListStylesChild>
              )
            })

            }
          </ListStyles>
        )
      })}
      </ContainerStyles>
    </SidebarStyles>
  )
}

export default Sidebar