import ThemeProvider, { ThemeContext } from '../context/ThemeContext';
import TasksProvider from '../context/TasksContext';
import GlobalStyle from "../styles/GlobalStyle";
import { useContext } from 'react';
import Main from '../layouts/Main';

function MyApp({ Component, pageProps }) {
  // const context = useContext(ThemeContext)
  // console.log(context)
  return <ThemeProvider>
    <TasksProvider>
      <GlobalStyle />
      <Main>
        <Component {...pageProps} />
      </Main>
    </TasksProvider>
  </ThemeProvider>
}

export default MyApp
