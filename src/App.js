import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Header from "./components/Header";
import Body from "./components/Body";
import AddNotes from "./components/AddNotes";
import About from "./components/About";
import { useState } from "react";
import StudyMaterialHome from "./components/StudyMaterialHome";
import { useState } from "react";
// import HomePage from "./components/HomePage";

const App = () => {
  const [notes, setNotes] = useState([]);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/studyMaterial"
            element={<StudyMaterialHome notes={notes}></StudyMaterialHome>}
          />
          <Route
            path="/addNotes"
            element={<AddNotes notes={notes} setNotes={setNotes}></AddNotes>}
          />
        </Routes>
      </div>
    </BrowserRouter>
    // <div>
    //   <HomePage/>
    // </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
