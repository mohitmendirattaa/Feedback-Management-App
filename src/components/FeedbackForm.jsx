import React, { useContext, useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import { FeedbackContext } from "../context/FeedbackContext";

function FeedbackForm() {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [rating, setRating] = useState(10);
  const [message, setMessage] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [text, setText] = useState("");
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setbtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  function handleChange(e) {
    if (text == "") {
      setbtnDisabled(true);
      setMessage(null);
    } else if (text != "" && text.trim().length <= 10) {
      setbtnDisabled(true);
      setMessage("Text must be atleast 10 character");
    } else {
      setMessage(null);
      setbtnDisabled(false);
    }

    setText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText("");
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service</h2>
        <RatingSelect select={(rating) => setRating(rating)}></RatingSelect>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleChange}
          />
          <Button type={"submit"} version={"primary"} isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
