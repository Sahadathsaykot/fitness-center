import React, { useState } from "react";
import "./Info.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Info = (props) => {
  const [Break, setBreak] = useState(0);
  const gettime = (value) => {
    setBreak(value);
    localStorage.setItem("Break-Time", value);
  };
  const maketoast = () => {
    toast.success("Exercise Complited", {
      position: "top-center",
      theme: "light",
    });
  };
  return (
    <div className="info-container">
      <div className="personal-info">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/108019010?v=4"
            alt=""
          />
        </div>
        <div>
          <h3>Mehrab Saykot</h3>
          <p>Dhaka, Bangladesh</p>
        </div>
      </div>
      <div className="physical-info">
        <div>
          <p>
            {" "}
            <span>83</span>kg
          </p>
          <p>Weight</p>
        </div>
        <div>
          <p>
            {" "}
            <span>5.8</span>inch
          </p>
          <p>Height</p>
        </div>
        <div>
          <p>
            {" "}
            <span>25</span>yrs
          </p>
          <p>Age</p>
        </div>
      </div>
      <div className="break-info">
        <h2>Add a Break</h2>
        <div className="break-buttons">
          <div>
            <button onClick={() => gettime("10")}>
              <p>10s</p>
            </button>
          </div>
          <div>
            <button onClick={() => gettime("20")}>
              <p>20s</p>
            </button>
          </div>
          <div>
            <button onClick={() => gettime("30")}>
              <p>30s</p>
            </button>
          </div>
          <div>
            <button onClick={() => gettime("40")}>
              <p>40s</p>
            </button>
          </div>
          <div>
            <button onClick={() => gettime("50")}>
              <p>50s</p>
            </button>
          </div>
        </div>
      </div>
      <div className="exercise-info">
        <h2>Exercise Details</h2>
        <div className="exercise-time">
          <h3>Exercise Time</h3>
          <p>{localStorage.getItem("exercise")} Seconds</p>
        </div>
        <div className="break-time">
          <h3>Break Time</h3>
          <p>{localStorage.getItem("Break-Time")} Seconds</p>
        </div>
      </div>
      <div onClick={maketoast} className="completed-part">
        <button className="completed-btn">
          <p>Exercise Completed</p>
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Info;
