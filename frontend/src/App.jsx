
import './App.css';
import { Main } from './components/Main/Main';
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import { ProductDetail } from './components/views/ProductDetail/ProductDetail';
import { EditarProduct } from './components/EditarProduct/EditarProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/:id',
    element: <ProductDetail/>
  },
  { 
    path: '/:id/edit',
    element: <EditarProduct/>
    
  }
])

function App() {
  return (
    <div className='app'>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
