import React from "react";
import Banner from "../Components/Banner";
import Cards from "../Components/Cards";

const BlogPage = () => {
  return (
    <>
      <Banner />
      <div className="container-fluid my-5 articles">
        <div className="container row gy-4 mx-auto">
          <h1 className="my-3">Articles</h1>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
