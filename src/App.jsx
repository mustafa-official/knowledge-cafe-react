import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const getData = (blog) => {
    const newBlogs = [...bookmark, blog];
    setBookmark(newBlogs);
  };

  let [time, setTime] = useState(0);
  const handleTime = (getTime, id) => {
    time = time + getTime;
    setTime(time);
    //remove mark as read
    // console.log("remove", id);
    const remaining = bookmark.filter((data) => data.id !== id);
    setBookmark(remaining);
  };

  return (
    <>
      <Header></Header>
      <div className="flex lg:flex-row flex-col gap-5 mt-6">
        <Blogs getData={getData} handleTime={handleTime}></Blogs>
        <Bookmarks bookmark={bookmark} time={time}></Bookmarks>
      </div>
    </>
  );
}

export default App;
