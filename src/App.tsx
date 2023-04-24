import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Suspense } from 'react'
import { AppRoutes, routes } from "./utils/routes";
import { ThemeProvider } from "styled-components"
import CustomLoadingPage from "./components/custom/CustomLoadingPage";
import Logo from "./components/Logo";
import { GlobalStyles, theme } from "./config/theme";
import AppWrapper from "./components/layout/AppWrapper";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={
      <CustomLoadingPage >
      <Logo/>
      </CustomLoadingPage>
      }>
         <GlobalStyles />
      <Router>
      <AppWrapper>
            <Routes>
              {routes.map((route: AppRoutes, index: number) => {
                const { component: Component, path, } = route;
                return (
                  <Route key={index} path={path} element={<Component />} />
                );
              })}
                {/* <Route path='*' element={<NotFound text="Uhm....abeg, go back home" title="this is 404!!!" style={{margin:"100px 0"}} />
                  }/> */}
            </Routes>
      </AppWrapper>
      </Router>
    
    </Suspense>
    </ThemeProvider>
    
  )
}

export default App
