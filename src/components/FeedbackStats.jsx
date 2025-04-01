import React, { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  const totalReviews = feedback.length;
  let averageRating =
    feedback.reduce((acc, curr) => (acc = acc + curr.rating), 0) / totalReviews;
  averageRating = averageRating.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>{totalReviews} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
}

export default FeedbackStats;
