"use client";
import styles from "./styles.module.css";

const ProductCard = ({ id, image, price, description, title }) => {

  const handleNavigateToDetailsPage = () => {
    navigate(`/${id}`);
  };

  const formatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div className={styles.product_container}>
      {" "}
      <h5>{title}</h5>
      <img className={styles.product_container_img} src={image} alt={title} />
      <div>
        <p>{formatter.format(price)}</p>
        {/* <button onClick={handleNavigateToDetailsPage}>Details</button> */}
      </div>
    </div>
  );
};

export default ProductCard;

// import React from 'react';
// import { useRouter } from 'next/router';

// const Home = () => {
//   const router = useRouter();

//   const navigateToAbout = () => {
//     router.push('/about');
//   };

//   return (
//     <div>
//       <h1>Home Page</h1>
//       <button onClick={navigateToAbout}>Go to About Page</button>
//     </div>
//   );
// };

// export default Home;
