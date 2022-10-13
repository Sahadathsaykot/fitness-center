import React from "react";
import "./Exercise.css";

const Exercise = (props) => {
  const { img, name, description, age, time } = props.exercise;
  const { HandleToClick } = props;
  return (
    <div className="exercise">
      <img src={img} alt="" />
      <div className="exercise-info">
        <p>
          <span> {name}</span>
        </p>
        <p>{description}</p>
        <p>
          For age: <span>{age}</span>
        </p>
        <p>
          Time required: <span>{time}</span>{" "}
        </p>
      </div>
      <button onClick={() => HandleToClick(time)} className="button">
        <p className="button-text">Add to List</p>
      </button>
    </div>
  );
};

export default Exercise;
