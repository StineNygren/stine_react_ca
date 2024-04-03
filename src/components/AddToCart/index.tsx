import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../../types/types";

interface AddToCartProps {
  product: Product;
}

function AddToCart({ product }: AddToCartProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = () => {
    setCart(prevCart => [...prevCart, product]);
    console.log(cart)
  }

  return ( 
    <Button onClick={handleAddToCart} variant="contained" color="primary"> Add to Cart </Button>
  );
}

export default AddToCart;