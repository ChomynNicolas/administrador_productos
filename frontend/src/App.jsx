
import './App.css';
import { Main } from './components/Main/Main';
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import { ProductDetail } from './components/views/ProductDetail/ProductDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>
  },
  {
    path: '/:id',
    element: <ProductDetail/>
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
