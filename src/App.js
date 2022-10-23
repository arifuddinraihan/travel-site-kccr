import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <RouterProvider router={routes}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
