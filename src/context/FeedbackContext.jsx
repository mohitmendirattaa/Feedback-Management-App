import React from "react";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FeedbackContext = createContext();
function FeedbackProvider({ children }) {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Mohit Mendiratta",
      rating: 5,
    },
    {
      id: 2,
      text: "Anshul Mendiratta",
      rating: 8,
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  function editFeedback(item) {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => {
        if (item.id === id) {
          return { ...item, ...updItem };
        }
        return item;
      })
    );
  };

  function deleteFeedback(id) {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(
        feedback.filter((item) => {
          return item.id !== id;
        })
      );
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackProvider;
