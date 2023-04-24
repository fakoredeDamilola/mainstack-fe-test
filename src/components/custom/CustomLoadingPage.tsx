import { CustomPages, CustomStyles } from "../../styles/LoadingPage.styles"

const CustomLoadingPage = ({children}:{children:React.ReactNode}) => {
  return (
    <CustomPages>
        {children}
        <CustomStyles />
    </CustomPages>
  )
}

export default CustomLoadingPage