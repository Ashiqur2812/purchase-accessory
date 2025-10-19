import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { HiHeart, HiOutlineShoppingCart } from "react-icons/hi";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCart, getAllProduct } from "../jsProduct/jsProduct";
const ProductDetails = () => {
  const [product, setProduct] = useState({});
  // const {pathname} = useLocation()

  const {
    product_image,
    product_title,
    price,
    description,
    specification,
    availability,
    rating,
  } = product;

  const data = useLoaderData();
  const { product_id } = useParams();

  useEffect(() => {
    const singleData = data.find(
      (product) => product.product_id === parseInt(product_id)
    );
    setProduct(singleData);
  }, [data, product_id]);

  const handleProduct = (products) => {
    // console.log(products)
    const newCart = getAllProduct();
    const isExist = newCart.find((p) => p.product_id === products.product_id);
    if (isExist) {
      toast.error("product already added");
    } else {
      addToCart(product);
    }
  };

  return (
    <>
      <div className="w-11/12 mx-auto">
        <Helmet>
          <title>Product Details | {product_id}</title>
        </Helmet>
        <div className=" mt-5 py-10 pb-80 bg-purple-700 text-center text-white">
          <h2 className=" text-4xl pb-4  font-bold">Product Details</h2>
          <p className="lg:mx-96">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="absolute p-10 gap-10 left-4 lg:left-60 rounded-2xl -bottom-[35rem] lg:-bottom-40 flex lg:flex-row flex-col justify-between items-center bg-base-100 max-w-7xl mx-auto">
          <div className="w-40 lg:w-96">
            <img
              className="rounded-xl transition hover:scale-110"
              src={product_image}
              alt=""
            />
          </div>
          <div className="text-black ">
            <h3 className="text-2xl font-semibold">{product_title}</h3>
            <h3 className="py-3">
              <span className="font-bold">Price :</span> ${price}
            </h3>
            <h3>{availability}.</h3>
            <p className="py-3 ">{description}</p>
            <h3 className="font-bold">Specification : </h3>
            <ol className="py-4 list-decimal ml-5">
              {specification &&
                specification.map((item, i) => <li key={i}>{item}</li>)}
            </ol>
            <h3 className="font-bold">Rating: </h3>
            <div className="flex py-6 gap-4  items-center">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                />
              </div>
              <div>
                <button className="btn">{rating}</button>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div>
                <button
                  onClick={() => handleProduct(product)}
                  className="btn bg-purple-700 text-white"
                >
                  Add to cart <HiOutlineShoppingCart />
                </button>
              </div>
              <div>
                <button className="btn">
                  <HiHeart size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-96"></div>
      </div>
    </>
  );
};

ProductDetails.propTypes = {};

export default ProductDetails;
