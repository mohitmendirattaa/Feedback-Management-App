import { useState, React } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLinks from "./components/AboutIconLinks";
import FeedbackProvider from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header
          text="Feedback UI"
          bgcolor="rgba(0,0,0,0.4)"
          textcolor="#ff6a95"
        ></Header>

        <div className="container">
          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <FeedbackForm></FeedbackForm>
                  <FeedbackStats></FeedbackStats>
                  <FeedbackList></FeedbackList>
                </>
              }
            ></Route>
            <Route path={"/about"} element={<AboutPage />}></Route>
          </Routes>
          <AboutIconLinks />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
