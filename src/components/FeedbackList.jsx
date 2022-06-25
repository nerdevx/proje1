import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";
import Card from "./shared/Card";
import Spinner from "./shared/Spinner";

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <Card>Henuz gonderi olusturulmadi</Card>; // Item olmadigi zaman icin olusturdugumuz Card Componenti kullanmis olduk.
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div> // feedback liste itemleri icin map kullanarak itemleri render ediyoruz.
  );
}

export default FeedbackList;
