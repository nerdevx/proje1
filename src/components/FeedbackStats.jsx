import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length; // feedback listesindeki ratingleri topluyoruz ve liste uzunlugu ile carpiyoruz.

  average = average.toFixed(1).replace(/[.,]0$/, ""); // toFixed(1) is for rounding the average to 1 decimal place.

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
