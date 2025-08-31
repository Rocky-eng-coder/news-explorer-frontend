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
import Preloader from "../Preloader/Preloader";

import "./App.css";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [articles, setArticles] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

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

  const fetchNews = async (query) => {
    setIsLoading(true);
    setNoResults(false);
    setArticles([]);

    const today = new Date();
    const lastWeek = new Date(today);
    lastWeek.setDate(today.getDate() - 7);
    const from = lastWeek.toISOString().split("T")[0];
    const to = today.toISOString().split("T")[0];

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
      query
    )}&from=${from}&to=${to}&sortBy=publishedAt&language=en&pageSize=30&apiKey=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status !== "ok") {
        console.error("API error:", data);
        return;
      }

      if (data.articles.length === 0) {
        setNoResults(true);
      } else {
        setArticles(data.articles);
        setVisibleCount(3);
      }
    } catch (error) {
      console.error("Network error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="main-background">
                  <Header
                    onSignInClick={() => setIsLoginOpen(true)}
                    onLogout={handleLogout}
                    isLoggedIn={isLoggedIn}
                    username={username}
                    transparent={true} // transparent on home
                  />

                  <div className="intro">
                    <Main
                      onSearch={fetchNews}
                      articles={articles}
                      visibleCount={visibleCount}
                      onShowMore={handleShowMore}
                      isLoggedIn={isLoggedIn}
                    />
                  </div>
                </div>

                {isLoading && <Preloader />}

                {!isLoading && articles.length > 0 && (
                  <section className="results-section">
                    <h2 className="results-heading">Search results</h2>
                    <div className="search-results">
                      {articles.slice(0, visibleCount).map((article, index) => (
                        <NewsCard
                          key={index}
                          article={article}
                          isLoggedIn={isLoggedIn}
                        />
                      ))}
                    </div>
                    {visibleCount < articles.length && (
                      <button
                        className="show-more-button"
                        onClick={handleShowMore}
                      >
                        Show more
                      </button>
                    )}
                  </section>
                )}

                <About />
              </>
            }
          />

          <Route
            path="/saved-news"
            element={
              isLoggedIn ? (
                <>
                  <Header
                    onSignInClick={() => setIsLoginOpen(true)}
                    onLogout={handleLogout}
                    isLoggedIn={isLoggedIn}
                    username={username}
                    transparent={false}
                  />
                  <SavedNews username={username} isLoggedIn={isLoggedIn} />
                </>
              ) : (
                <Navigate to="/" replace />
              )
            }
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
    </Router>
  );
}

export default App;
