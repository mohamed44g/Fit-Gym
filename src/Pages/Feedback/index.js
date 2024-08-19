
import React from "react";
import Pagetitle from "../../components/Pagetitle";
import FeedbackCard from "../../components/FeedbackCard";
import "./Feedback.scss";

const feedbackData = [
  {
    id: 1,
    text: "Great service and support!",
    author: "John Doe",
  },
  {
    id: 2,
    text: "Very satisfied with the results.",
    author: "Jane Smith",
  },
  {
    id: 3,
    text: "The best experience I’ve had with a fitness program.",
    author: "Alice Johnson",
  },
];

export default function Feedback() {
  return (
    <div className="Feedback container">
      <Pagetitle highlite="our members" title="WHAT THEY SAID" />
      <div className="Feedback-cards d-flex justify-content-between flex-wrap">
        {feedbackData.map(({ id, text, author }) => (
          <FeedbackCard key={id} text={text} author={author} />
        ))}
      </div>
    </div>
  );
}
