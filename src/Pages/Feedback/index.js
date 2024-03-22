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
