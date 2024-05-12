import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeComp from "./Components/HomeComponent";
import QuizComp from "./Components/QuizComponent";
import ResultComp from "./Components/ResultComponent";

const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomeComp />} />
        <Route path="/Quiz" element={<QuizComp />} />
        <Route path="/Result"element={<ResultComp />} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;