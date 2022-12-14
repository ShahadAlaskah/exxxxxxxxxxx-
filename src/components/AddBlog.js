import React, { useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addBlog = async () => {
    const bodyValue = {
      title: title,
      body: body,
    };

    const request = await fetch("http://localhost:8090/api/v1/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyValue),
    });
  };
  return (
    <div className="container ">
      <h1 className="text-center">Add new Blog !</h1>
      <div class=" mt-5">
        <label class="form-label">Blog title</label>
        <input
          placeholder="Please put the blog title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          class="form-control"
        />
        <label class="form-label mt-3">Blog body</label>
        <textarea
          placeholder="Please put the blog body here"
          value={body}
          rows="15"
          onChange={(e) => setBody(e.target.value)}
          class="form-control "
        />
      </div>
      <button
        onClick={addBlog}
        type="button"
        class="btn btn-secondary mt-3 w-100"
      >
        Add New Blog
      </button>
    </div>
  );
};

export default AddBlog;
