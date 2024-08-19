<<<<<<< HEAD
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
=======
import React, { useRef } from "react";
import Pagetitle from "../../compentants/Pagetitle/index";
import FeedbackCard from "../../compentants/FeedbackCard/index";
import "./Feedback.scss";

export default function Feedback() {
  return (
    <div className="Feedback container">
      <Pagetitle highlite="our members" title="WHAT THEY SAID" />

      <div
        className={`Feedback-cards d-flex justify-content-between flex-wrap`}
      >
        <FeedbackCard key={1} />
        <FeedbackCard key={2} />
        <FeedbackCard key={3} />
      </div>
    </div>
  );
}
>>>>>>> 90b992db25db3febd6857dd866a86cc872b19690
