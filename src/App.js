import React from 'react';
import Header from './Header/Header';
import Container from './Container/Container';
import Footer from './Footer/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <div>
                <Header />
                <Container />
                <Footer />
            </div>
        </div>
    );
}

export default App;
