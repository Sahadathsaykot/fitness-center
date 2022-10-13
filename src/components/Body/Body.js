import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import Exercise from "../Exercixe/Exercise";
import Info from "../Info/Info";
import "./Body.css";

const Body = () => {
  const [exercises, setExercises] = useState([]);
  const [times, setTimes] = useState(0);
  useEffect(() => {
    fetch("exercise.json")
      .then((res) => res.json())
      .then((data) => setExercises(data));
  }, []);

  const ClickHundle = (time) => {
    const newtimes = time + times;
    const fineltime = parseInt(newtimes);
    setTimes(fineltime);
    localStorage.setItem("exercise", newtimes);
  };
  return (
    <div className="full-body-part">
      <h2>Select Your Exercise</h2>
        <div>
          <div className="body-container">
            <div className="exercise-container">
              {exercises.map((exercise) => (
                <Exercise
                  key={exercise.id}
                  exercise={exercise}
                  HandleToClick={ClickHundle}
                ></Exercise>
              ))}
            </div>
          <div className="personal-info-container">
            <Info times={times}></Info>
          </div>
        </div>
        <div>
          <Blog></Blog>
        </div>
        </div>
    </div>
  );
};

export default Body;
