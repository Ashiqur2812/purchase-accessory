import PropTypes from "prop-types";
import { NavLink} from "react-router-dom";

const Product = ({ product }) => {
  
  const { product_id, product_title, product_image, price } = product || {};
  return (
    <>
      <div className="card ml-16 lg:ml-0 bg-base-100 w-72 shadow-xl transition hover:scale-105">
        <figure className="px-10 pt-10">
          <img
            src={product_image}
            alt=""
            className="rounded-xl object-cover w-full h-48 overflow-hidden"
          />
        </figure>
        <div className="card-body items-start text-start">
          <h2 className="card-title text-black">{product_title}</h2>
          <p className="text-black">Price : {price}</p>
          <NavLink
            to={`/product/${product_id}`}
            className="card-actions btn flex justify-center items-center border-2 border-purple-700 text-purple-700 rounded-full"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </>
  );
};

Product.propTypes = {
  product: PropTypes.object,
  image: PropTypes.object,
};

export default Product;
