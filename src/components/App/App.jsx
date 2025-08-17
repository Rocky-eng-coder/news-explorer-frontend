import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import SavedNews from "../SavedNews/SavedNews";
import NewsCard from "../NewsCard/NewsCard";

import "./App.css";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedLogin = localStorage.getItem("isLoggedIn");
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedLogin === "true" && storedUser) {
      setIsLoggedIn(true);
      setUsername(storedUser.username);
    }
  }, []);

  const handleLogin = ({ email, password }) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      setUsername(storedUser.username);
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      setIsLoginOpen(false);
    } else {
      alert("Incorrect email or password");
    }
  };

  const handleRegister = ({ email, password, username }) => {
    const user = { email, password, username };
    localStorage.setItem("user", JSON.stringify(user));
    setUsername(username);
    setIsRegisterOpen(false);
    setIsLoginOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Router>
      <div className="App">
        <div className="intro">
          <Header
            onSignInClick={() => setIsLoginOpen(true)}
            onLogout={handleLogout}
            isLoggedIn={isLoggedIn}
            username={username}
          />

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
            <Route
              path="/saved-news"
              element={isLoggedIn ? <SavedNews /> : <Navigate to="/" replace />}
            />
          </Routes>

          <Footer />

          <LoginModal
            isOpen={isLoginOpen}
            onClose={() => setIsLoginOpen(false)}
            onSwitch={() => {
              setIsLoginOpen(false);
              setIsRegisterOpen(true);
            }}
            onLogin={handleLogin}
          />

          <RegisterModal
            isOpen={isRegisterOpen}
            onClose={() => setIsRegisterOpen(false)}
            onSwitch={() => {
              setIsRegisterOpen(false);
              setIsLoginOpen(true);
            }}
            onRegister={handleRegister}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
