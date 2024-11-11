import toast from "react-hot-toast";
const getAllProduct = () => {
  const storedData = localStorage.getItem("cart-item");
  if (storedData) {
    const dataParse = JSON.parse(storedData);
    return dataParse;
  } else {
    return [];
  }
};

const addToCart = (product) => {
  const favorite = getAllProduct();
  favorite.push(product);
  localStorage.setItem("cart-item", JSON.stringify(favorite));
  //   const findData = favorite.find(
  //     (product) => product.product_id === product.product_id
  //   );
  //   if (findData) {
  //     return ("Product already exist");
  //   } else {
  //     favorite.push(product);

  toast.success("Product is added successfully");
};
// };

const handleRemoveProduct = (id) => {
  const data = getAllProduct();
  const remain = data.filter((product) => product.product_id != id);
  localStorage.setItem("cart-item", JSON.stringify(remain));
  toast.success("Successfully Removed");
};

export { getAllProduct, addToCart, handleRemoveProduct };
