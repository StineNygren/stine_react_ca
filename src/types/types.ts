type Image = {
    url: string;
    alt: string;
  };
  
   export type Review = {
    id: string;
    username: string;
    rating: number;
    description: string;
  };
  
  export type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    discountedPrice: number;
    image: Image;
    rating: number;
    tags: string[];
    reviews: Review[];
  };