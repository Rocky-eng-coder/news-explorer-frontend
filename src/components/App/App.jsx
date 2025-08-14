import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SavedNews from "../SavedNews/SavedNews";

import "./App.css";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <div className="intro">
          <Header onSignInClick={() => setIsLoginOpen(true)} />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Main />
                  <About />
                </>
              }
            />
            <Route path="/saved-news" element={<SavedNews />} />
          </Routes>

          <Footer />

          <LoginModal
            isOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
            onSwitch={() => {
              setIsLoginOpen(false);
              setIsRegisterOpen(true);
            }}
          />

          <RegisterModal
            isOpen={isRegisterOpen}
            onClose={() => setIsRegisterOpen(false)}
            onSwitch={() => {
              setIsRegisterOpen(false);
              setIsLoginOpen(true);
            }}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
