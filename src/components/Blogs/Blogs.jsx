import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({getData, handleTime}) => {
    // console.log(getData);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="lg:w-[70%] w-full">
      {blogs.map((blog) => (
        <Blog 
        blog={blog} 
        key={blog.id}
        getData={getData}
        handleTime={handleTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
    getData: PropTypes.func,
    handleTime: PropTypes.func,
}
export default Blogs;
