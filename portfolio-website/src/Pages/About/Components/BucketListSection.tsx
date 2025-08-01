import React from "react";
import { CheckCircle } from "@mui/icons-material";

const BucketListSection = () => {
  const lifeGoals = [
    { text: "Earn a B.S. in Computer Engineering", completed: true },
    { text: "Land first Software Engineering role", completed: true },
    { text: "Publish a polished portfolio website", completed: true },
    { text: "Travel to 10 countries", completed: false },
    { text: "M.S. in Computer Science", completed: false },
    { text: "Achieve Principle Engineer title", completed: false },
    { text: "Start tech-focused content creation", completed: false },
    {
      text: "Get featured or speak at a tech/design conference",
      completed: false,
    },
    { text: "Build a game!!", completed: false },
    { text: "Marry my girlfriend :D", completed: false },
  ];

  return (
    <div className="card">
      <h2 className="cardTitle">Bucket List</h2>
      <div className="aboutDivider"></div>
      <div className="goalsContainer">
        <ul className="goalsList">
          {lifeGoals.map((goal, index) => (
            <li
              key={index}
              className={`goalItem ${goal.completed ? "completed" : ""}`}
            >
              <span className="goalText">{goal.text}</span>
              {goal.completed && <CheckCircle className="checkIcon" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BucketListSection;