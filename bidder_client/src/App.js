import './App.css';
import { useState, useEffect } from "react";
import { renderMatches, Route, Routes } from "react-router-dom";
import { Session } from "./requests";
import { User } from "./requests";
import WelcomePage from './components/WelcomePage';
import AuctionIndexPage from './components/AuctionIndexPage';
import NavBar from './components/Navbar';
import AuthRoutes from './components/AuthRoutes';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import NewAuctionPage from './components/NewAuctionPage';
import AuctionShowPage from './components/AuctionShowPage';



function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = () => {
    return User.current().then((user) => {
      if (user?.id) {
        setUser(user);
      }
    });
  };

  const onSignOut = () => {
    setUser(null);
  };

  return (
    <>
      <NavBar
        currentUser={user}
        onSignOut={onSignOut}
      />
      <Routes>
        <Route exact path="/" element={<WelcomePage />} />
        <Route exact path="/auctions" element={<AuctionIndexPage />} />
        <Route element={<AuthRoutes isAuthenticated={!!user} />}>
          <Route exact path="/auctions/new" element={<NewAuctionPage />} />
        </Route>
        <Route path="/auctions/:id" element={<AuctionShowPage />} />
        <Route
          exact
          path="/sign_in"
          element={<SignInPage onSignIn={getCurrentUser} />}
        />
        <Route
          exact
          path="/sign_up"
          element={<SignUpPage onSignUp={getCurrentUser} />}
        />
      </Routes>
    </>
  );
}


export default App;
