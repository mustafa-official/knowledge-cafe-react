import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, getData, handleTime }) => {
  //   console.log(getData);
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-16">
      <img className="w-full rounded-xl" src={cover} alt="" />
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-3">
          <img className="w-[50px]" src={author_img} alt="" />
          <div>
            <h2 className="font-bold text-xl">{author}</h2>
            <p className="">{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>{reading_time} min read</p>
          <button onClick={() => getData(blog)} className="text-xl">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold my-4">{title}</h2>
      {hashtags.map((hash, idx) => (
        <span key={idx}>
          <a className="mx-3" href="">
            #{hash}
          </a>
        </span>
      ))}
      <div>
        <button onClick={()=>handleTime(reading_time)} className="mt-3 text-[blueviolet] underline">
          Mark as read
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  getData: PropTypes.func,
  handleTime: PropTypes.func,
};
export default Blog;
