import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import Card from "./shared/Card";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <Card>No feedback Yet</Card>; // Item olmadigi zaman icin olusturdugumuz Card Componenti kullanmis olduk.
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div> // feedback liste itemleri icin map kullanarak itemleri render ediyoruz.
  );
}

export default FeedbackList;
