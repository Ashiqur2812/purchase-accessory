import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
// import{useParams,useLocation} from 'react-router-dom'
const Categories = ({ categories }) => {
  // const { category } = useParams();
  // const { pathname } = useLocation();
  // {
  //   pathname === `/category/${category}` ? "mb-96" : "";
  // }
  return (
    <>
      <div className="mt-0 lg:mt-20"></div>
      <div className="mt-10 ml-20 lg:ml-10 menu bg-base-200 w-fit h-fit">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `btn ${isActive ? "bg-purple-700 text-white" : ""}`
          }
        >
          <button className="menu">All Products</button>
        </NavLink>
        <div className="menu bg-base-200 w-56">
          {categories.map((category) => (
            <NavLink
              className={({ isActive }) =>
                `btn my-2 mx-2 ${isActive ? "bg-purple-700 text-white" : ""}`
              }
              key={category.category}
              to={`/category/${category.category}`}
            >
              {category.category}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.object,
};

export default Categories;
