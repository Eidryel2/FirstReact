import React, { useContext } from 'react';
import './App.css';
import productsData from './data/products';
import { Button, Modal } from 'react-bootstrap';
import Navbar from './components/NavBar';
import Header from './components/Header';

import AboutUs from './components/AboutUs';
import Team from './components/Team';
import Footer from './components/Footer';
import Product from './components/Product';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContext from './CartContext';

function App() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [showCart, setShowCart] = React.useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== product.id));
  };

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div>
      <Navbar />
      <Header />
  
        <h1>Produtos</h1>
      <div className="products">
        {productsData.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <Button variant="primary" onClick={handleShowCart} className="cart-button">
        Carrinho ({cartItems.length})
      </Button>
      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Carrinho</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Fechar 
          </Button>
        </Modal.Footer>
      </Modal>
      <AboutUs />
      <Team />
      <Footer />

    
    </div>
  );
}

export default App;