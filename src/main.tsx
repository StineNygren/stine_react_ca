import ReactDOM from 'react-dom/client'
import { store } from './servises/store.ts';
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import Router from './components/Router/index.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={Router} />
  </Provider>
)