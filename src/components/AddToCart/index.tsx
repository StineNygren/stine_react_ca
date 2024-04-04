import { Button } from "@mui/material";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../servises/cartSlice";
import { Product } from "../../types/types";

interface AddToCartProps {
  product: Product;
}

function AddToCart({ product }: AddToCartProps) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <Button onClick={handleAddToCart} variant="contained" color="primary"> Add to Cart </Button>
  );
}

export default AddToCart;