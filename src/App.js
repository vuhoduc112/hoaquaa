import './App.css';
import { useState } from 'react';
import Header from './Header/Header';
import Container from './Container/Container';
import Footer from './Footer/Footer';
import Store from './Header/Store/Store';
import Register from './Header/Account/Register';
import Login from './Header/Account/Login';
import Contact from './Container/Contact/Contact';
import Shop from './Container/Shop/Shop';
import Pay from './Container/Pay/Pay';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListCartPay from './Header/ListCartPay/ListCartPay';
import DetailProduct from './Header/DetailProduct/DetailProduct';
import UserLoginSS from './Header/UserLoginSS/UserLoginSS';
function App() {
    const [openCart, setOpenCart] = useState(false);

    const handleOpenCart = () => {
        setOpenCart(!openCart);
    };

    return (
        <div className="App">
            <div>
                <BrowserRouter>
                    <Header openCart={openCart} />
                    <Routes>
                        <Route path="/" element={<Container handleOpenCart={handleOpenCart} />} />
                        <Route path="/store" element={<Store />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/pay" element={<Pay />} />
                        <Route path="/listCartPay" element={<ListCartPay />} />
                        <Route path="/detailProduct" element={<DetailProduct />} />
                        <Route path="/selectLogin" element={<UserLoginSS />} />
                    </Routes>
                    <Footer />
                </BrowserRouter>
                <div className="app-fb-btn">Chat Facebook</div>
                <div className="app-call-btn">0384159943</div>
            </div>
        </div>
    );
}

export default App;
