import { Product } from '../../types/types';
import { NavLink} from 'react-router-dom';
import { CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Grid item key={product.id} >
      <NavLink to={`/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box display="flex" flexDirection="column" alignItems="center">
          <CardMedia
            component="img"
            sx={{ height: 320, width: 320, objectFit: 'cover' }}
            image={product.image.url}
            alt={product.image.alt}
          />
          <CardContent sx={{ width: 320 }}>
            <Typography gutterBottom variant="h5" component="div">
              {product.title}
            </Typography>
            <Box display="flex" gap={1}>
            <Typography variant="body2">
  {product.price === product.discountedPrice ? product.price : product.discountedPrice}
</Typography>
<Typography variant="body2" color="error.main">
  {product.price > product.discountedPrice && 
    Math.round(((product.price - product.discountedPrice) / product.price) * 100) + '%'
  }
</Typography>
            </Box>
          </CardContent>
        </Box>
      </NavLink>
    </Grid>
  );
};

export default ProductCard;