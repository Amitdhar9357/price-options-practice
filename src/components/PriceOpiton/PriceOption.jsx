import PropTypes from "prop-types";
import Features from "../Features/Features";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (

    <div className="bg-blue-500 rounded-lg p-4 flex flex-col  ">
      <h2 className="text-center">
        <span className="text-6xl">{price}</span>
        <span className="text-3xl">/mon</span>
      </h2>
      <h4 className="text-2xl text-center my-6">{name} </h4>
      <div className="pl-4 flex-grow">
        {
          features.map((feature, index) => <Features key={index} feature={feature} ></Features>)
        }
      </div>
      <button className="mt-10 bg-green-500 w-full py-2 rounded-lg hover:bg-green-800 text-white font-semibold ">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
}

export default PriceOption;