import React, { useState } from "react";
import Axios from "axios";

const BlogContent = (props) => {
  const { id } = props.match.params;
  const [content, setContent] = useState({
    blogContent: [],
    cnt: 0,
    message: "",
  });
  const GetBlogContent = async () => {
    if (content.cnt === 0) {
      await Axios.get(
        `https://techfiercenode.netlify.app/.netlify/functions/app/blog-page-content/${id}`
      ).then((data) => {
        if (data.data.message) {
          setContent((prevVal) => {
            return {
              blogContent: [data.data.message],
              message: data.data.message,
              cnt: 1,
            };
          });
        } else {
          setContent((prevVal) => {
            return {
              blogContent: data.data,
              cnt: 1,
            };
          });
        }
      });
    }
  };
  GetBlogContent();
  return (
    <>
      <div className="container blogContent mt-5">
        <div className="row mx-auto blogContentRow">
          <div className="col-md-10 col-12 ml-5 blogContentColumn mb-5">
            {content.blogContent.map((val, key) => {
              //console.log("Hello" + val);
              if (val === content.message) {
                return <h1 key={key}>Content Not Found</h1>;
              } else {
                if (val.image) {
                  return <img src={val.image} className="contentImages my-3" alt="..." />;
                }
                if (val.title) {
                  return (
                    <h2 key={key} className="text-center my-3">
                      {val.title}
                    </h2>
                  );
                }
                if (val.content === "break") {
                  return <br />;
                }
                if (val.content === "breakbreak") {
                  return (
                    <>
                      <br />
                      <br />
                    </>
                  );
                } else {
                  return (
                    <span key={key} className="content">
                      {val.content}
                    </span>
                  );
                }
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogContent;
