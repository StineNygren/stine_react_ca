import { useParams } from 'react-router-dom';
import { Review } from '../../types/types';
import { useGetPostQuery } from '../../servises/api.reducer';
import { Rating, Box, Typography, Grid } from '@mui/material';
import AddToCart from '../../components/AddToCart';

function ProductPage() {
    const { id } = useParams();
    const { data: product, error, isLoading } =  useGetPostQuery(id || '');
    const { data } = product || {}; 
    console.log(data)
    return ( 
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: </div>}
            {data && (

                <Grid container>
                <Grid item>
                <div>
                <img src={data.image.url} alt={data.image.alt} />
                </div>
            </Grid>
            <Grid item >
                <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <Box display="flex">
                <Typography variant="body2">
  {data.price === data.discountedPrice ? data.price : data.discountedPrice}
</Typography>
<Typography variant="body2" color="error.main">
  {data.price > data.discountedPrice && 
    Math.round(((data.price - data.discountedPrice) / data.price) * 100) + '%'
  }
</Typography>
                </Box>
                <p>{data.price}</p>
                <Rating name="half-rating" defaultValue={data.rating} precision={0.5} />
                <AddToCart product={data} />
                <h3>Reviews</h3>
                {data.reviews.map((review: Review) => (
                    <div key={review.id}>
                    <p>{review.username}</p>
                    <p>Rating: {review.rating}</p>
                    <p>{review.description}</p>
                    </div>
                ))}
                </div>
            </Grid>
            </Grid>

                 )}
                </>
        );
}
export default ProductPage;