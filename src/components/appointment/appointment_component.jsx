import { Fragment } from "react";
import "./appointment_styles.css";
const Appointment = () => {
  return (
    <Fragment>
      <div className="appointment-parent">
        <div className="appointment-info">
          <p className="appointment-info-heading1">NEED SOME ADVICE FROM OUR EXPERTS</p>
          <p className="appointment-info-heading2">
            Request A Call Back Today<br></br> Now!
          </p>
          <p className="appointment-info-heading3">
            Save Time and Energy by Easily Booking an Online Appointment Within
            Minutes. Save Time and Energy by Easily Booking an Online
            Appointment Within Minutes. Save Time and Energy by Easily Booking
            an Online Appointment Within MinutesSave Time and Energy by Easily
            Booking an Online Appointment Time and Energy by Easily Booking an
            Online Time and Energy by Easily Booking an Online Appointment Time
            and Energy by Easily Booking an Online Appointment{" "}
          </p>
        </div>
        <div className="appointment-form">
          <div>
          <input placeholder="Your Name*" type="text" className="appointment-form-input" ></input>
          <br></br>
          <input placeholder="Contact No*" type="text" className="appointment-form-input"></input>
          </div>
          <div className="appointment-form-radio-buttons">
            Your Availability :<input type="checkbox"></input> AM{" "}
            <input type="checkbox"></input> PM
          </div>
          <button className="appointment-form-button">Request Now</button>
          
          <div className="appointment-form-policy">
            <input type="checkbox"></input>
            <p>I have read and accept the terms and conditions</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Appointment;
