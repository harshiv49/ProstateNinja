import { Fragment } from "react";
import "./review_styles.css";
import ReviewPerson from "../../assets/review.png";
const Review = () => {
  return (
    <Fragment>
      <div className="review-parent">
        <div className="review-view-all">
          <p className="review-view-all-heading1">Save Time Feel Better</p>
          <p className="review-view-all-heading2">What Patient Says </p>
          <p className="review-view-all-description">
            Save Time and Energy by Easily Booking an Online Appointment Within
            Minutes. Save Time and Energy by Easily Booking an Online
            Appointment Within Minutes. Save Time and Energy by Easily Booking
            an Online Appointment Within MinutesSave Time and Energy by Easily
            Booking an Online Appointment Time and Energy by Easily Booking an
            Online Time and Energy by Easily Booking an Online Appointment Time
            and Energy by Easily Booking an Online Appointment
          </p>
          <button className="review-view-all-button">View All Reviews</button>
        </div>
        <div className="review-card-parent">
        <div className="review-card">
          <div className="review-card-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
          <p className="review-card-description">
            Save Time and Energy by Easily Booking an Online Appointment
            Within Minutes. Save Time and Energy by Easily Booking an Online
            Appointment Within Minutes.
          </p>
          <div className="review-card-person">
            <img src={ReviewPerson} alt="review-person" className="review-card-person-image"></img>
            <div className="review-card-person-details">
              <p className="review-card-person-name">Mrs Paul Walker</p>
              <p className="review-card-person-occupation">Dentist</p>
            </div>
          </div>
        </div>
        <div className="review-card">
        <div className="review-card-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
          <p className="review-card-description">
            Save Time and Energy by Easily Booking an Online Appointment
            Within Minutes. Save Time and Energy by Easily Booking an Online
            Appointment Within Minutes.
          </p>
          <div className="review-card-person">
            <img src={ReviewPerson} alt="review-person" className="review-card-person-image"></img>
            <div className="review-card-person-details">
              <p className="review-card-person-name">Mrs Paul Walker</p>
              <p className="review-card-person-occupation">Dentist</p>
            </div>
          </div>
        </div>
      </div>
      <div className="review-card-parent">
      <div className="review-card">
        <div className="review-card-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
        <p className="review-card-description">
          Save Time and Energy by Easily Booking an Online Appointment
          Within Minutes. Save Time and Energy by Easily Booking an Online
          Appointment Within Minutes.
        </p>
        <div className="review-card-person">
          <img src={ReviewPerson} alt="review-person" className="review-card-person-image"></img>
          <div className="review-card-person-details">
            <p className="review-card-person-name">Mrs Paul Walker</p>
            <p className="review-card-person-occupation">Dentist</p>
          </div>
        </div>
      </div>
      <div className="review-card">
      <div className="review-card-stars">&#9733; &#9733; &#9733; &#9733; &#9733;</div>
        <p className="review-card-description">
          Save Time and Energy by Easily Booking an Online Appointment
          Within Minutes. Save Time and Energy by Easily Booking an Online
          Appointment Within Minutes.
        </p>
        <div className="review-card-person">
          <img src={ReviewPerson} alt="review-person" className="review-card-person-image"></img>
          <div className="review-card-person-details">
            <p className="review-card-person-name">Mrs Paul Walker</p>
            <p className="review-card-person-occupation">Dentist</p>
          </div>
        </div>
      </div>
    </div>

       
      </div>
    </Fragment>
  );
};
export default Review;
