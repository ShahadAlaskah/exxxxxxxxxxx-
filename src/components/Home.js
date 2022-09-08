import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const [blogList, setBlogList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const request = await fetch("http://localhost:8090/api/v1/blog");
      const data = await request.json();
      setBlogList(data);
    };
    fetchBlogs();
  }, []);


  return (
    <div className="container text-center">
      <h1 className="my-3">Blog System !</h1>
      <hr />
      <ul className="list-group">
        {blogList.map((i) => (
          <li key={i.id} id={i.id} className="list-group-item">
            <Link to={`/details/${i.id}`}>{i.title}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <button
        onClick={() => {
          navigate("/add");
        }}
        class="btn btn-primary mt-3 w-100 btn-lg"
        type="button"
      >
        Add Blog
      </button>
    </div>
  );
};

export default Home;
