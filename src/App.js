import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Details from './views/Details';
import Main from './views/Main';
import UpdateProduct from './views/UpdateProduct';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="" element={<Main />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/product/:id/edit" element={<UpdateProduct />} />
          <Route path='*'element={<><h1>Error</h1></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
