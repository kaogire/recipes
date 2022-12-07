import React from "react";
import { useState } from "react";
import RecipeReview from "./RecipeReview";

const reviewItem = {
  background: "rgba(0, 0, 0, 0.24)",
  color: "white",
};

const reviewsHeader = {
  color: "white",
  fontSize: "20px",
  padding: "0.3em 0em 0.3em 0.8em",
  marginTop: "2em",
  backgroundColor: "rgba(94, 151, 255, 0.4)",
  width: "88.5vw",
};

function Reviews() {
  const [reviews, setReviews] = useState([]);

  function addReview(newReview) {
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
  }

  return (
    <div>
      {/* <div>
        <h3 style={reviewsHeader}>Reviews</h3>
      </div>
      <div>
        <RecipeReview addReview={addReview} />
      </div>
      <div>
        {reviews.map((review) => (
          <div key={review.title} style={reviewItem}>
            <h4>
              {review.title}: {review.comment}
            </h4>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Reviews;
