
import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <footer className="Footer text-center">
      <h2 className="fw-bold">DON'T STOP TILL YOU MAKE IT</h2>
      <p className="mt-4">
        Join before 5th April and get 50% off joining fee, along with the chance
        to get a personal trainer for a year.
      </p>
      <button className="btn footer-btn mt-4" aria-label="Join Now">
        Join Now
      </button>
    </footer>
  );
}