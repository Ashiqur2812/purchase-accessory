// import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Product from "../Product/Product";

const AllProducts = () => {
  const data = useLoaderData();
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (category) {
      const filteredData = data.filter(
        (product) => product.category === category
      );
      setProducts(filteredData);
    } else {
      setProducts(data);
    }
  }, [category, data]);

  if (products.length === 0) {
    return (
      <div>
        <h2 className="text-purple-700 text-3xl lg:text-5xl font-semibold mt-40">
          This product is not available at the moment.
        </h2>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product, idx) => (
          <Product key={idx} product={product}></Product>
        ))}
      </div>
    </>
  );
};

AllProducts.propTypes = {};
export default AllProducts;
