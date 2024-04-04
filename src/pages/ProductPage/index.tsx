import { useParams } from 'react-router-dom';
import { Review } from '../../types/types';
import { useGetPostQuery } from '../../servises/api.reducer';
import { Rating, Box, Typography, Grid, Container } from '@mui/material';
import AddToCart from '../../components/AddToCart';

function ProductPage() {
    const { id } = useParams();
    const { data: product, error, isLoading } =  useGetPostQuery(id || '');
    const { data } = product || {}; 
    console.log(data)
    return ( 
        <>
        <Container maxWidth="lg">
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: </div>}
            {data && (

                <Grid container justifyContent={"center"} gap={5}>
                <Grid item>
                <div>
                <img style={{ height: "500px", width: "500px", objectFit: "cover"}} src={data.image.url} alt={data.image.alt} />
                </div>
            </Grid>
            <Grid item sx={{maxWidth: "500px"}} >
                <div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                <Rating name="half-rating" defaultValue={data.rating} precision={0.5} />
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
            </Container>
                </>
        );
}
export default ProductPage;