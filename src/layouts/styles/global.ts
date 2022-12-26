import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
  *{
    outline:0;
    padding:0;
    margin:0;
    box-sizing:border-box
  }


  #wrapper{
    display: flex;
    justify-content: center;
  }


  a{
    text-decoration: none;
    color:inherit
  }
`;
