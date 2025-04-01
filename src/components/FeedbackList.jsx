import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import { AnimatePresence, motion } from "framer-motion";
import { FeedbackContext } from "../context/FeedbackContext";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  if (feedback.length == 0) {
    return <p>No Feedback Yet</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item, index) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              <FeedbackItem item={item} key={index}></FeedbackItem>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
