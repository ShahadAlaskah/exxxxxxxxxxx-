import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const BlogDetails = () => {
  const [blog, setBlog] = useState("");

  const params = useParams();
  const idValue = params.id;

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const request = await fetch(
        "http://localhost:8090/api/v1/blog/" + idValue
      );
      const data = await request.json();
      setBlog({ title: data.title, body: data.body });
    };
    fetchBlogDetails();
  }, []);

  return (
    <div className="container ">
      <h1 className="text-center">Blog Details</h1>
      <div class=" mt-5">
        <label class="form-label">Blog title</label>
        <input readOnly value={blog.title} type="text" class="form-control" />
        <label class="form-label mt-3">Blog body</label>
        <textarea rows="15" readOnly value={blog.body} class="form-control " />
      </div>
    </div>
  );
};

export default BlogDetails;
