import { Button, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearCart } from "../../servises/cartSlice";

function Success() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearCart());
    }, [dispatch]);
    return ( 
        <Grid container alignItems={"center"} flexDirection={"column"}>
            <h1>Success</h1>
            <Button variant="contained" color="primary" href="/">Go to Home</Button>
        </Grid>
     );
}

export default Success;