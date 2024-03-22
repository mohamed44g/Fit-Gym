import React from "react";
import "./FeedbackCard.scss";
import { useInView } from "react-intersection-observer";
export default function Index(props) {
  const { ref, inView } = useInView();
  return (
    <div
      className={`Feedback-card d-flex  ${inView ? `animate1` : null}`}
      ref={ref}s
    >
      <div className="Feedback-card-text">
        <p className="text-center">
          "I started working out in FITGYM. Exercise is so much fun and passion
          like never before. The trainers are awesome Highly recommended"
        </p>
      </div>
    </div>
  );
}
