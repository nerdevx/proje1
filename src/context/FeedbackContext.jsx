import React, { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; /// using for new obj id

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setfeedback] = useState([
    {
      id: 1,
      text: "Denemelik Tespit",
      rating: 10,
    },
  ]);

  const [editFb, seteditFb] = useState([
    {
      item: {},
      edit: false,
    },
  ]);

  // set delete feedback

  const deleteFeedback = (id) => {
    if (window.confirm("Emin misin")) {
      setfeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //add feed back

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4(); // unique id for the new submitted object

    setfeedback([newFeedback, ...feedback]); //  for curr fb ... new fb set with the spread opr.  so we can add new feedback to the list
  };

  // set edit fb
  const editFeedback = (item) => {
    seteditFb({
      item,
      edit: true,
    });
  };

  // Update Feedback item

  const updateFeedback = (id, updItem) => {
    setfeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    ); // for each item in the list if the id is equal to the id of the item we want to update then we want to update the item with the new item
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        editFb,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
