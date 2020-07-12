import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./CSS/Navbar.css";
import "./CSS/BlogContent.css";
import BlogPage from "./Pages/BlogPage";
import BlogContent from "./Pages/BlogContent";

const App = () => {
  return (
    <>
      <Navigation />
      <Router>
        <Route exact path={"/"} component={BlogPage} />
        <Route exact path={"https://techfierceblogs.netlify.app/blog-content/:id"} component={BlogContent} />
      </Router>
    </>
  );
};

export default App;
