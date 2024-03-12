import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="lg:w-[70%] w-full border">
      <h2>Blogs: {blogs.length}</h2>
    </div>
  );
};

export default Blogs;
