import React from "react";

const NerdFactsSection = () => {
  const nerdFacts = [
    "I started video editing at age 14",
    "My daily ride is a CBR500R motorcycle",
    "I love Fujifilm !",
    "I built a 7,500+ follower Instagram page around video edits in high school",
    "My dream job title is 'Principle Frontend Engineer'",
    "I'm happy you read this far :)",
  ];

  return (
    <div className="card">
      <h2 className="cardTitle">Nerd facts & random stuff</h2>
      <div className="aboutDivider"></div>
      <ul className="nerdFactsList">
        {nerdFacts.map((fact, index) => (
          <li key={index} className="nerdFact">
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NerdFactsSection;