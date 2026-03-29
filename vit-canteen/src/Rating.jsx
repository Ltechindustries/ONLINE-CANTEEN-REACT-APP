import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Rating.css";

function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert(`Rating: ${rating} ⭐\nReview: ${review}`);
    
    // You can later store in DB
    navigate("/"); // go back to home
  };

  return (
    <div className="rating-container">
      <h1>⭐ Rate Your Experience</h1>
      
      {/* Star Rating */}
      <div className="stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={star <= (hover || rating) ? "star active" : "star"}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            ★
          </span>
        ))}
      </div>

      {/* Review Box */}
      <textarea
        placeholder="Write your review here..."
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      {/* Submit Button */}
      <button onClick={handleSubmit}>
        Submit Review
      </button>
    </div>
  );
}

export default Rating;