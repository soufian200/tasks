import { createGlobalStyle } from 'styled-components';
import colors from '../constants/colors';

const GlobalStyle = createGlobalStyle`
html,
body {
  
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    background: #fff;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

ul{
  list-style: none;
}

hr{
  border: 0;
  height: .01rem;
  background-color: #eee;
  margin: .2rem 0;
}

.con{
  width: 30rem;
  max-width: 40rem;
  min-width: 10rem;
}

`;
export default GlobalStyle;