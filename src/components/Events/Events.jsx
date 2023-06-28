import React from "react";
import "./Events.css";
import bg from "../../assets/EVENTS/bg.png";
import mupink from "../../assets/EVENTS/mu-pink.png";

const Events = () => {
  return (
    <div className="events-wrapper" id="events" data-aos="fade-up">
      <h1>Karma is the key!</h1>
      <div className="event-content-wrapper">
        <p>
          Karma points are points earned by completing tasks, challenges, and
          boot camps in the uLearn platform Points serve as proof of the work
          done by the students and can be used to obtain various benefits, such
          as invitations to exclusive events and promotions in the local
          community. The more Karma points a student has, the more accomplished
          they are seen in the community.
        </p>
        <div className="event-div-wrapper">
          <div className="event-sections">
            <div className="single-event-div">
              <img src={mupink} alt="" />
              <p>Access to invite-only events.</p>
            </div>
            <div className="single-event-div">
              <img src={mupink} alt="" />
              <p>Paid Internships</p>
            </div>
          </div>
          <div className="event-sections">
            <div className="single-event-div">
              <img src={mupink} alt="" />
              <p>Exclusive career opportunities</p>
            </div>
            <div className="single-event-div">
              <img src={mupink} alt="" />
              <p>Roles in the µverse</p>
            </div>
          </div>
          <div className="event-sections">
            <div className="single-event-div">
              <img src={mupink} alt="" />
              <p>Industrial Networks</p>
            </div>
            <div className="single-event-div">
              <img src={mupink} alt="" />
              <p>and many more...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
