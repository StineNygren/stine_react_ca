import ReactDOM from 'react-dom/client'
import { store } from './servises/store.ts';
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import Router from './components/Router/index.tsx';
import { ThemeProvider, CssBaseline } from '@mui/material';
import {theme} from './theme'; 
import { useDispatch } from 'react-redux';
import { loadCart } from './servises/cartSlice.ts';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCart());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)