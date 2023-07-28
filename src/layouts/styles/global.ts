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
    flex-wrap: wrap;
  }


  a{
    text-decoration: none;
    color:inherit
  }


  /* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 4px;
}

*::-webkit-scrollbar-track {
  background: #fff;
}

*::-webkit-scrollbar-thumb {
  background-color: #574F4D;
  border-radius: 10px;
  /* border: 3px solid #fff; */
}
`;
