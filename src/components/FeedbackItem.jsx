import { FaTimes, FaEdit } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";
import Card from "./shared/Card";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="red" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="red" />
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
