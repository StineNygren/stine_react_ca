import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography, Grid, Container } from "@mui/material";
import { increaseItem, decreaseItem, removeItem  } from '../../servises/cartSlice';
import { RootState } from '../../servises/store';



function Cart() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleIncrease = (id: string) => {
    dispatch(increaseItem(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseItem(id));
  };

  const handleDelete = (id: string) => {
    dispatch(removeItem(id));
  };

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