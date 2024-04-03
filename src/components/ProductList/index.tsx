import { useState } from 'react';
import { ProductListProps } from '../../types/types';
import ProductCard from '../ProductCard';
import { Grid, Box, TextField } from '@mui/material';




const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box display="flex" flexDirection="column" alignItems="center" m={1} p={1}>
      <Box width="90%" m={5}>
        <TextField
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          fullWidth
        />
      </Box>
      <Grid container spacing={3} justifyContent="center">
      {filteredProducts.length > 0 ? (
    filteredProducts.map(product => (
      <Grid p={3} key={product.id}>
        <ProductCard product={product} />
      </Grid>
    ))
  ) : (
    <p>No products found.</p>
  )}
      </Grid>
    </Box>
  );
};

export default ProductList;