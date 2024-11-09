import PropTypes from "prop-types";
import { AiFillCheckCircle } from "react-icons/ai";

const Features = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center text-white text-base"> <AiFillCheckCircle className="mr-2 text-green-500"></AiFillCheckCircle> {feature}</p>
    </div>
  );
};

Features.propTypes = {
  feature: PropTypes.string
}

export default Features;