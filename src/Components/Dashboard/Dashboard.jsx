import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import modalImage from "../../assets/Group.png";
import Heading from "../Heading/Heading";
import { getAllProduct, handleRemoveProduct } from "../jsProduct/jsProduct";

const Dashboard = () => {
  const [product, setProduct] = useState([]);
  const [modal, setModal] = useState(false);
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();

  const handlePurchase = () => {
    if (cost > 0) {
      setTotalCost(cost);
      setModal(true);
      setProduct([]);
      localStorage.removeItem("cart-item");
    }
  };

  const handleStopModal = () => {
    setModal(false);
    navigate("/");
  };

  const cost = product.reduce(
    (previous, current) => previous + current.price,
    0
  );

  useEffect(() => {
    const addProduct = getAllProduct();
    setProduct(addProduct);
  }, []);

  const handleSortProduct = () => {
    const sortedData = [...product].sort((a, b) => b.price - a.price);
    setProduct(sortedData);
  };

  const handleDeleteProduct = (id) => {
    handleRemoveProduct(id);
    const updateProduct = getAllProduct();
    setProduct(updateProduct);
  };

  return (
    <div className="mt-5">
      <div>
        <div className="bg-purple-700 py-6 text-white">
          <Heading
            title={"Dashboard"}
            subtitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          ></Heading>
          <div className="flex justify-center items-center gap-4 mt-8">
            <div>
              <button className="btn bg-white px-8 text-purple-700">
                Cart
              </button>
            </div>
            <div>
              <button className="btn border-1 border-white text-white bg-purple-700">
                WishList
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-6 mx-16">
          <div>
            <h3 className="text-3xl font-semibold">Cart</h3>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <h3 className="text-xl font-semibold">Total Cost: {cost}</h3>
            </div>
            <div>
              <button
                onClick={handleSortProduct}
                className="btn bg-white text-purple-700 border-2 border-purple-700 font-semibold"
              >
                Sort By Price
              </button>
            </div>
            <div>
              <button
                onClick={handlePurchase}
                disabled={cost === 0}
                className="btn bg-purple-700 text-white font-semibold"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        {product.map((p) => (
          <div
            key={p.product_id}
            className="flex lg:flex-row flex-col max-w-6xl mx-auto items-center border-2 rounded-lg border-gray-200 p-6 mt-6 gap-8 mb-6"
          >
            <div>
              <img className="w-36 rounded-lg" src={p.product_image} alt="" />
            </div>
            <div className="text-black">
              <h3 className=" text-2xl font-semibold">{p.product_title}</h3>
              <p className="py-4">Description : {p.description}</p>
              <p>Price: {p.price}</p>
            </div>
            <div>
              <button
                className="ml-60"
                onClick={() => handleDeleteProduct(p.product_id)}
              >
                <MdDelete size={30} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <img className="py-5 flex mx-40" src={modalImage} alt="" />
            <h3 className="text-2xl font-bold mb-4">Payment Successful</h3>
            <h3>Thanks for purchasing</h3>
            <h3>Total : {totalCost}</h3>
            <button
              onClick={handleStopModal}
              className="btn bg-purple-700 text-white px-4 py-2 mt-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
