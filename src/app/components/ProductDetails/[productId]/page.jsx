import { useState } from "react";

const ProductDetails = ({ params }) => {
  const [productData, setProductData] = useState({});

  const fetchProductDetails = async () => {
    // setLoading(true);
    const response = await api.get(`/products/${params.details}`);
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
