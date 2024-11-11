import PropTypes from "prop-types";

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center ">
        <h1 className="w-80 lg:w-[45rem] text-xl md:text-xl lg:text-4xl font-bold mb-1 lg:mb-4 text-center mt-6">
          {title}
        </h1>
        <p className="w-96 lg:w-[45rem] text-sm md:text-base  text-center mt-6">
          {subtitle}
        </p>
      </div>
    </>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Heading;
