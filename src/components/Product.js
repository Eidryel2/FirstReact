import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product" id='produtos'>
      <Card>
        <Card.Img variant="top" src={product.imageUrl} alt={product.name} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>Preço: R${product.price}</Card.Text>
          <Button onClick={() => onAddToCart(product)}>Adicionar ao Carrinho</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;