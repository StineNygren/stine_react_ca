import { AppBar, Toolbar, Grid, Box, Typography, IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { styled } from '@mui/system';
import { useState, useEffect } from 'react';



function Header() {

    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
      // Get the current cart from localStorage
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  
      // Update the cart count
      setCartCount(cart.length);
    }, []);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
          color: theme.palette.primary.main,
          backgroundColor: theme.palette.primary.contrastText,
        },
      }));



        

    return ( 
        <header>
            <Box>
                <AppBar position="static">
                    <Grid container direction={"row"} justifyContent={"space-between"} alignItems={"center"} p={3}  >
                        <Typography>Logo</Typography>
                    
       

                        <Toolbar>
                            <Box mr={2}>
                            <Link to="/"  style={{color: "inherit", textDecoration: 'none'}}>Home </Link>
                            <Link to="/contact" style={{color: "inherit", textDecoration: 'none'}}>Contact </Link>
                            </Box>
                        </Toolbar>

                        <Link to="/cart" style={{color: "inherit"}}>
                        <IconButton aria-label="cart">
                        <StyledBadge badgeContent={cartCount} >
                            <ShoppingCartIcon />
                        </StyledBadge>
                        </IconButton>
                        </Link>

                         
                    
                    </Grid>
                </AppBar>
                </Box>
            </header>
     );
}

export default Header;