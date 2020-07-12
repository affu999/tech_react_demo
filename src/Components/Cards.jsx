import React, { useState } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState({
    blogs: [],
    cnt: 0,
  });
  const GetAllCards = () => {
    if (data.cnt === 0) {
      Axios.get(
        "https://techfiercenode.netlify.app/.netlify/functions/app/get-blog-paths"
      ).then((pathsData) => {
        setData((prevVal) => {
          return {
            blogs: pathsData.data.blogs,
            cnt: 1,
          };
        });
      });
    }
  };
  GetAllCards();
  return (
    <>
      {data.blogs.map((val, key) => {
        return (
          <div className="col-md-3" key={key}>
            <div className="card">
              <img src={val.imagePath} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{val.blogName}</h5>
                <p className="card-text">{val.blogDesc}</p>
                <NavLink
                  to={`/blog-content/${val.filePath}`}
                  className="btn btn-primary"
                >
                  View
                </NavLink>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cards;
