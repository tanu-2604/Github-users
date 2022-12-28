import React, { useContext } from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import loadingImage from "../images/preloader.gif";
import { GithubContext } from "../context/context";
const Dashboard = () => {
  const {isLoading} = useContext(GithubContext)
  return (
    <main>
      <Navbar />
      <Search />
     {
      isLoading ? <img src={loadingImage} className="loading-img" alt="loading" /> : ( <><Info /><User /><Repos /></>)
     }
    </main>
  );
};

export default Dashboard;
