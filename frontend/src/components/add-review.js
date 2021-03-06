import React, { useState } from 'react';
import RestaurantDataService from '../services/restaurant.js';
import { Link } from 'react-router-dom';

const AddReview = props => {
  let initialReviewState = "";
  let initialRatingState = "";
  let editing = false;

  if (props.location.state && props.location.state.currentReview) {
    editing = true;
    initialReviewState = props.location.state.currentReview.text;
    initialRatingState = props.location.state.currentReview.rating;
  }

  const [review, setReview] = useState(initialReviewState);
  const [rating, setRating] = useState(initialRatingState);
  const [submitted, setSubmitted] = useState(false);

  const handleReviewChange = event => {
    setReview(event.target.value);
  };

  const handleRatingChange = event => {
    setRating(event.target.value);
  };

  const saveReview = () => {
    var data = {
      text: review,
      rating: rating,
      name: props.user.name,
      user_id: props.user.id,
      restaurant_id: props.match.params.id
    };

    if (editing) {
      data.review_id = props.location.state.currentReview._id;
      RestaurantDataService.updateReview(data)
        .then(response => {
          setSubmitted(true);
          console.log("Review updated to: " + response.data);
        })
        .catch(e => { console.log("Attempted to update review:" + e)});
    } else {
      RestaurantDataService.createReview(data)
        .then(response => {
          setSubmitted(true);
          console.log("Review created: " + response.data);
        })
        .catch(e => { console.log("Attempted to create review: " + e)});
    }
  };

  return (
    <div>
      {props.user ? (
        <div className="submit-form">
          {submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <Link to={"/restaurants/" + props.match.params.id} className="btn btn-success">Back to Restaurant</Link>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="description">{ editing ? "Edit " : "Create " }Review</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="text" 
                  required 
                  value={review}
                  onChange={handleReviewChange} 
                  name="text" 
                />
              </div>
              <div>
                <label htmlFor="rating">{ editing ? "Edit " : "Create " }Rating</label>
                  <input 
                    type="number"
                    className="form-control" 
                    id="rating"
                    min="1"
                    max="5"
                    required
                    value={rating}
                    onChange={handleRatingChange}     
                    name="rating"
                  />
              </div>
              <button onClick={saveReview} className="btn btn-success">Submit</button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <h5><strong>An account is required to add a review.</strong></h5>
          <p>Please log in.</p>
        </div>
      )}
    </div>
  )
}

export default AddReview;