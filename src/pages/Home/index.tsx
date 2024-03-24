

import { useGetPostsQuery } from '../../servises/api.reducer';
import { Product } from '../../types/types';
import { NavLink} from 'react-router-dom';

function Home() {

  const { data: products, error, isLoading } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error:</div>;
    // return <div>Error: {error.message}</div>;
  }
  console.log(products)

  return (
    <>
      {products?.map((product: Product) => (
        <div key={product.id}>
          <NavLink to={`/${product.id}`}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <img src={product.image.url} alt={product.image.alt} />
          <p>Price: {product.price}</p>
          <p>Discounted price: {product.discountedPrice}</p>
          <p>Rating: {product.rating}</p>
          <p>Tags: {product.tags.join(', ')}</p>
          <h3>Reviews</h3>
          {product.reviews.map((review) => (
            <div key={review.id}>
              <p>{review.username}</p>
              <p>Rating: {review.rating}</p>
              <p>{review.description}</p>
            </div>
          ))}
        </NavLink>
        </div>
      ))}
    </>
  );
}

export default Home
