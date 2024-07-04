import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

#root {
  /* padding-left: calc(50% - 695px);
    padding-right: calc(50% - 695px); */
}

body {
  /* background-color: gainsboro; */
}

button {
    cursor: pointer;
    border: none;
}



`
export default GlobalStyles
