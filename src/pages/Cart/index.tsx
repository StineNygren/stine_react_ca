import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Typography, Grid, Container } from "@mui/material";
import { increaseItem, decreaseItem, removeItem  } from '../../servises/cartSlice';
import { RootState } from '../../servises/store';



function Cart() {

  const cart = useSelector((state: RootState) => state.cart.items);

  if (cart.length === 0) {
    return (
      <Grid container alignItems={"center"} flexDirection={"column"}>
      <h1>Cart is empty</h1>
      <Button variant="contained" color="primary" href="/">Go Shopping!</Button>
      </Grid>
    )
  }

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
    <Container maxWidth="lg" sx={{marginBottom: 5}} >
    <div >
      <h1>Cart</h1>
      {cart.map((product) => (
        <>
        
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
            <Grid  item >
          <Box display="flex" gap={1}>
          <Button sx={{minWidth: "20px"}} variant="outlined" onClick={() => handleDecrease(product.id)}>-</Button>
          <p style={{margin: 3}} >{product.count}</p>
          <Button sx={{minWidth: "20px"}} variant="outlined" onClick={() => handleIncrease(product.id)}>+</Button>
        </Box>

          <Button  sx={{marginTop: 3, }}  variant="contained" color="error" onClick={() => handleDelete(product.id)}>Delete</Button>
          </Grid>
         

        </Grid>
        <hr /> 
        </>
      ))}
        <h3>Total: {totalPrice}</h3>
        <Button variant="contained" color="primary" href="/success">Checkout</Button>
    </div >
  
   
    </Container>
  );
}

export default Cart;
