import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  
  const handleClear = () => {
    localStorage.removeItem("totalCorrectAnswers");
    localStorage.removeItem("totalWrongAnswers");
    localStorage.removeItem("totalAttemptedQuestions");
  };

  return (
    <div style={{marginTop:"230px"}} className="App">
      <h1>QUIZ APP</h1>

      <Link to="/Quiz">
        <button style={{width:"250px",marginTop:"120px"}} onClick={handleClear} className="btn"> PLAY </button>
      </Link>

    </div>
  );
}

export default Home;