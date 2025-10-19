import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";
import Categories from "../Categories/Categories";
import Heading from "../Heading/Heading";

const Home = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  //   const categories = useLoaderData();
  return (
    <>
      <Helmet>
        <title>Purchase Product | Home</title>
      </Helmet>
      <div className="bg-purple-700 h-[25rem] lg:h-[40rem] text-white rounded-b-3xl mb-40 lg:mb-[33rem]">
        <Heading
          title={"Upgrade Your Tech Accessorize with Gadget Heaven Accessories"}
          subtitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        ></Heading>

        <Banner></Banner>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-12 mb-20">
        <Categories categories={categories}></Categories>
        <Outlet></Outlet>
      </div>
    </>
  );
};

Home.propTypes = {};

export default Home;
