import { useParams } from 'react-router-dom';
import { Review } from '../../types/types';
import { useGetPostQuery } from '../../servises/api.reducer';

function ProductPage() {
    const { id } = useParams();
    const { data: product, error, isLoading } =  useGetPostQuery(id || '');
    const { data } = product || {}; // Destructure 'data' from 'product'
    console.log(data)
    return ( 
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: </div>}
            {data && (
                <div>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p>
                    <img src={data.image.url} alt={data.image.alt} />
                    <p>Price: {data.price}</p>
                    <p>Discounted price: {data.discountedPrice}</p>
                    <p>Rating: {data.rating}</p>
                    <p>Tags: {data.tags.join(', ')}</p>
                    <h3>Reviews</h3>
                    {data.reviews.map((review: Review) => (
                        <div key={review.id}>
                            <p>{review.username}</p>
                            <p>Rating: {review.rating}</p>
                            <p>{review.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
export default ProductPage;