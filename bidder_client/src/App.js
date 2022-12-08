import './App.css';
import { useState, useEffect } from "react";
import { Session } from "./requests";
import { User } from "./requests";
import WelcomePage from './components/WelcomePage';
import AuctionIndexPage from './components/AuctionIndexPage';

function App() {

  // const [user, setUser] = useState(null);
  
  // useEffect(() => {
  //   getCurrentUser();
  // }, []);

  // const getCurrentUser = () => {
  //   return User.current().then((user) => {
  //     if (user?.id) {
  //       setUser(user);
  //     }
  //   });
  // };

  // const onSignOut = () => {
  //   setUser(null);
  // };



  return (
    <AuctionIndexPage/>
  );
}

export default App;
