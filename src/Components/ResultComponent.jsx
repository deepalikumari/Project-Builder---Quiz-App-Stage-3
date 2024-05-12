import React from "react";
import "../App.css"
import quizData from "../resources/quizQuestion.json";
import { Link } from "react-router-dom";

const Result = () => {


  const totalQ = quizData.length;
  const correct = parseInt(localStorage.getItem("totalCorrectAnswers")) || 0;
  const wrong = parseInt(localStorage.getItem("totalWrongAnswers")) || 0;
  const attempt = parseInt(localStorage.getItem("totalAttemptedQuestions")) || 0;

  

  return (
    <div className="ResultPage">
      <h2>RESULT</h2>
      <div className="Pg">
        <h3>Need practice!</h3>
        <h1>Your Score {correct}</h1>
        <div className="flex around">

          <div>
            <h4>Total No. of ques.</h4>
            <h4>No. of attempted ques.</h4>
            <h4>No. of correct ans.</h4>
            <h4>No. of wrong ans.</h4>  
          </div>

          <div>
            <p>{totalQ}</p>
            <p>{attempt}</p>
            <p>{correct}</p>
            <p>{wrong}</p>
          </div>

        </div>
      <div className="flex btn" style={{margin:"10px 120px"}}>

        <Link to="/Quiz">
          <button id="B">PLAY AGAIN</button>
        </Link>

        <Link to="/">
            <button id="submit">BACK HOME</button>
        </Link>

      </div>
      </div>
    </div>
  );
};


export default Result;