import React from "react";
import { useState, useContext, useEffect } from "react";
import Button from "./shared/Button";
import Card from "./shared/Card";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const { addFeedback, editFb, updateFeedback } = useContext(FeedbackContext); // FeedbackContext'den addFeedback, editFb, updateFeedback fonksiyonlarini aliyoruz.

  useEffect(() => {
    if (editFb.edit === true) {
      setBtnDisabled(false);
      settext(editFb.item.text);
      setRating(editFb.item.rating);
    }
  }, [editFb]); // if you want  just to have it run once leave this empty

  // we want to run whenever we click on any of these edit section

  const [text, settext] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState(""); // for error message

  const handleChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Lutfen en az 10 karakter giriniz");
      setBtnDisabled(true); // if text is not empty and length is less than 10 disable the button
    } else {
      setMessage(null);
      setBtnDisabled(false); // if text is not empty and length is more than 10 enable the button
    }

    settext(e.target.value);
  };

  const handleSubmit = (e) => {
    if (text.trim().length > 10 && text !== "") {
      const newFeedback = {
        text,
        rating,
      };
      if (editFb.edit === true) {
        updateFeedback(editFb.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      //addFeedback(newFeedback);

      settext(""); // after submit set textfield to empty
      setBtnDisabled(true); // also for button to disabled
    }

    e.preventDefault(); // prevent default behavior of submit button
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Aldiginiz hizmetten memnun kaldiniz mi?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input
            value={text}
            onChange={handleChange}
            type="text"
            placeholder="Goruslerinizi yaziniz"
          />
          <Button isDisabled={btnDisabled} version="primary" type="submit">
            Gonder
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
