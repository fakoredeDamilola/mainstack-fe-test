import {createGlobalStyle} from 'styled-components';

export const theme = {
 primaryColor:"#131316"
}
export const fontSize ={
  h1:"24px",
  h2:"18px",
  h3:"20px",
  h4:"12px",
}

const sizes = {
  mobileS:"320px",
  mobileM:"605px",
  tablet:"768px",
  laptop:"1024px"
}

export const device = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
}

export const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'TestSohneMono-Buch';
    src: url('../styles/fonts/TestSöhneMono-Buch.otf') format('opentype');
}
@font-face {
  font-family: 'TestSohneMono-Fett';
    src: url('../styles/fonts/TestSöhneMono-Fett.otf') format('opentype');
}

   *{
    padding:0;
    margin:0;  
   box-sizing:border-box;
   }
  h1,h3,h4,h5,h6{
    font-family: 'TestSohneMono-Buch', sans-serif;
  }
  h1 {
    font-size:${fontSize.h1};
  }
  h3 {
    font-size:${fontSize.h3};
  }
  p {
    font-family: 'TestSohneMono-Fett', sans-serif;
  }
`