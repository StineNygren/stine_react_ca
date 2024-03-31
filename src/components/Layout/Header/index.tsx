import { AppBar, Toolbar, Grid, Box, Typography } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

function Header() {
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

                        <Link to="/cart" style={{color: "inherit"}}><ShoppingCartIcon /></Link>

                         
                    
                    </Grid>
                </AppBar>
                </Box>
            </header>
     );
}

export default Header;