import{ useState, useEffect } from 'react';
import { Product } from "../../types/types";
import { Box, Button, Typography, Grid, Container } from "@mui/material";

interface CartProduct extends Product {
  count: number;
}

function Cart() {
  const [cart, setCart] = useState<CartProduct[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const products: Product[] = JSON.parse(savedCart);
      const uniqueProducts: CartProduct[] = [];
      products.forEach(product => {
        const existingProduct = uniqueProducts.find(p => p.id === product.id);
        if (existingProduct) {
          existingProduct.count += 1;
        } else {
          uniqueProducts.push({ ...product, count: 1 });
        }
      });
      setCart(uniqueProducts);
    }
  }, []);

  const handleIncrease = (id: string) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(product => product.id === id ? { ...product, count: product.count + 1 } : product);
      localStorage.setItem('cart', JSON.stringify(updatedCart.flatMap(product => Array(product.count).fill(product))));
      return updatedCart;
    });
  }
  
  const handleDecrease = (id: string) => {
    setCart(prevCart => {
      const updatedCart = prevCart.map(product => product.id === id && product.count > 1 ? { ...product, count: product.count - 1 } : product).filter(product => product.count > 0);
      localStorage.setItem('cart', JSON.stringify(updatedCart.flatMap(product => Array(product.count).fill(product))));
      return updatedCart;
    });
  }

  const handleDelete = (id: string) => {
    setCart(prevCart => {
      const updatedCart = prevCart.filter(product => product.id !== id);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  }

  const totalPrice = (cart.reduce((total, product) => total + (product.discountedPrice || product.price) * product.count, 0)).toFixed(2);

  return (
    <Container maxWidth="lg">
    <div >
      <h1>Cart</h1>
      {cart.map((product) => (
        
        <Grid container justifyContent={"space-between"} alignItems={"center"} key={product.id}>
            <Grid item>
            <img width={"100px"} src={product.image.url} alt={product.image.alt} />
            </Grid>
            <Grid width={"500px"} item >
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <Box display="flex">
            <Typography variant="body2">
  {product.price === product.discountedPrice ? product.price : product.discountedPrice}
</Typography>
<Typography variant="body2" color="error.main">
  {product.price > product.discountedPrice && 
    Math.round(((product.price - product.discountedPrice) / product.price) * 100) + '%'
  }
</Typography>
            </Box>
            </Grid>
            <Grid  item>
          <Box display="flex">
          <button onClick={() => handleDecrease(product.id)}>-</button>
          <p style={{margin: 0}} >{product.count}</p>
          <button onClick={() => handleIncrease(product.id)}>+</button>
        </Box>

          <Button variant="contained" color="error" onClick={() => handleDelete(product.id)}>Delete</Button>
          </Grid>
        </Grid>
      ))}
        <h3>Total: {totalPrice}</h3>
    </div>
    </Container>
  );
}

export default Cart;