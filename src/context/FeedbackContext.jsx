import React, { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setfeedback] = useState([]);
  const [editFb, seteditFb] = useState([
    {
      item: {},
      edit: false,
    },
  ]);

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=_id&_order=desc`);

    const data = await response.json();

    setfeedback(data);
    setIsLoading(false);
  };

  // set delete feedback

  const deleteFeedback = (id) => {
    if (window.confirm("Emin misin")) {
      setfeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //add feedback

  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setfeedback([data, ...feedback]); //  for curr fb ... new fb set with the spread opr.  so we can add new feedback to the list
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
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
