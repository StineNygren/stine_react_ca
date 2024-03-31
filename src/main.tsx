import ReactDOM from 'react-dom/client'
import { store } from './servises/store.ts';
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import Router from './components/Router/index.tsx';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {theme} from './theme'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={Router} />
    </ThemeProvider>
  </Provider>
)