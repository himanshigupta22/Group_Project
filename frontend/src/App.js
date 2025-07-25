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
import 'react-toastify/dist/ReactToastify.css'; 
import Profile from "./components/Profile";

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
          <Route path="/profile" element={<Profile />} /> 
    <Route path="/profile" element={<Profile />} /> 
          {/* <Route path="/allnotes" element={<AllNotes />} />  */}
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
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
