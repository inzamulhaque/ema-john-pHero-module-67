import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Orders from './components/Orders/Orders';
import Shop from './components/shop/Shop';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import PageNotFound from './components/PageNotFound/PageNotFound';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/inventory' element={<RequireAuth>
          <Inventory />
        </RequireAuth>} />
        <Route path='/shipment' element={<RequireAuth>
          <Shipment />
        </RequireAuth>} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
