import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
import Time from "../Time/Time";
const Bookmarks = ({ bookmark, time }) => {
  return (
    <div className="lg:w-[30%] w-full pb-4 bg-slate-300 rounded-xl h-max">
      <Time time={time}></Time>
      <h3 className="text-center mt-4 font-extrabold text-xl">
        Bookmarked Blogs: {bookmark.length}
      </h3>
      {bookmark.map((b, idx) => (
        <Bookmark key={idx} bookmark={b}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmark: PropTypes.array,
  time: PropTypes.number,
};
export default Bookmarks;
