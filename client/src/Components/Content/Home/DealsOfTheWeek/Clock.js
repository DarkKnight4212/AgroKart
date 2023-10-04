import React, { Fragment } from "react";
import "./Clock.css";

const Clock = ({ timerDays, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock flex">
            <section>
              <p><strong>{timerDays}</strong></p>
              <small>Days</small>
            </section>
            <section>
              <p><strong>{timerHours}</strong></p>
              <small>Hours</small>
            </section>{" "}
            <section>
              <p><strong>{timerMinutes}</strong></p>
              <small>Minutes</small>
            </section>{" "}
            <section>
              <p><strong>{timerSeconds}</strong></p>
              <small>Seconds</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMinutes: 10,
  timerSeconds: 10,
};

export default Clock;