import React, { useState } from 'react';
import './Review.css';

const RatingWithReview = ({ totalStars = 5, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);
  const [review, setReview] = useState('');

  const handleSetRating = (rate) => {
    setRating(rate);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 리뷰 제출
    console.log(`Rating: ${rating}, Review: ${review}`);
    // 제출 후 초기화
    setReview('');
    setRating(0);
  };

  return (
    <div className="rating-review-container">
      <div className="rating">
        {[...Array(totalStars)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => handleSetRating(ratingValue)}
              />
              <span
                className={`star ${ratingValue <= rating ? 'filled' : ''}`}
                role="img"
                aria-label="star"
              >★</span>
            </label>
          );
        })}
      </div>
      <form onSubmit={handleSubmit} className="review-form">
        <textarea
          placeholder="리뷰를 작성해주세요...."
          value={review}
          onChange={handleReviewChange}
          className="review-textarea"
          required
        ></textarea>
        <button type="submit" className="submit-btn">제출</button>
      </form>
    </div>
  );
};

export default RatingWithReview;