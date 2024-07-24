import { useState } from "react";
import { useRouter } from 'next/router';


const ProductDetails = ({ params }) => {
  const [productData, setProductData] = useState({});
  const router = useRouter();

  const fetchProductDetails = async () => {
    console.log("hello")
    // setLoading(true);
    const response = await api.get(`/products/${params.id}`);
    console.log(response);
    const { data } = response;
    setProductData(data);
    // setLoading(false);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return <div>ProductDetails {params.productId}</div>;
};

export default ProductDetails;
