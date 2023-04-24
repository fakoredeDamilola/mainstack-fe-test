import styled from "styled-components";

const CustomPages = styled.div`
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height:100%;
  box-sizing: border-box;
`
const CustomStyles = styled.div`
 top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y:scroll;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  position: fixed;
`

export {CustomPages,CustomStyles}