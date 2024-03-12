import PropTypes from "prop-types";

const Time = ({ time }) => {
  return (
    <div className="text-[blueviolet] text-xl bg-[#f6ebff] p-4 rounded-lg border border-[blueviolet]">
      <h2 className="text-center">Spent time on read: {time} min</h2>
    </div>
  );
};

Time.propTypes = {
    time: PropTypes.number
};

export default Time;
