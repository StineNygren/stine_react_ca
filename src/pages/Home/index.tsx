import ProductList from "../../components/ProductList";
import { Grid } from '@mui/material';
import { useGetPostsQuery } from '../../servises/api.reducer';

function Home() {
  const { data: products, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <Grid container justifyContent={"center"}>
      <ProductList products={products || []} />
    </Grid>
  );
}

export default Home;
