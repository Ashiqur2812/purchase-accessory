import { useLocation, useParams } from "react-router-dom";
import bannerImage from "../../assets/banner.jpg";
const Banner = () => {
  const { category } = useParams();
  const { pathname } = useLocation();
  {
    pathname === `/category/${category}` ? "mb-96" : "";
  }
  return (
    <>
      <div className="mt-12">
        <button className="btn mx-2 lg:mx-[44rem] text-purple-700  rounded-full mb-8 ml-40 lg:ml-[43rem]">
          Shop now
        </button>

        <img
          className="border-2 p-5 max-w-5xl w-60 lg:w-full  mx-auto rounded-2xl"
          src={bannerImage}
          alt=""
        />

        <h2 className="text-2xl lg:text-5xl text-center text-purple-700 font-semibold mt-12">
          Explore Cutting-Edge Gadgets
        </h2>
      </div>
    </>
  );
};

export default Banner;
