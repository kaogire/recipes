import React from "react";
import { useState } from "react";

const input1 = {
  padding: "0.5em 0.5em 0.5em 0.5em",
  width: "20%",
};
const input2 = {
  padding: "0.5em 0.5em 0.5em 0.5em",
  width: "45%",
};
const button = {
  padding: "0.5em 0.5em 0.5em 0.5em",
};

function ReviewItem({ addReview }) {
  const [formData, setFormData] = useState({
    title: "",
    comment: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addReview(formData);
    setFormData({
      title: "",
      comment: "",
    });
  }

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input
          style={input1}
          type="text"
          name="title"
          placeholder="Movie/Series Title:  "
          value={formData.title}
          onChange={handleChange}
        />
        <input
          style={input2}
          type="text"
          name="comment"
          placeholder="Add a comment"
          value={formData.comment}
          onChange={handleChange}
        />
        <button style={button} type="submit">
          Post
        </button>
      </form> */}
    </div>
  );
}

export default ReviewItem;
