import React from "react";
import "../CSS/Banner.css";

const Banner = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner banner">
          <div className="carousel-item active">
            <img
              src="https://lh3.googleusercontent.com/UiKfOsIR1SE5TFbfL4OSWTSkRIlIjN8KRycrpFePscohj7RrQX4-1TkcC880lBJCGUZJxVYWYPq7IJEYdQnVPEbaDUk3crGraA3G8wVL87li0HKM2VaHdacEnW17QAc9Zpx1OO0=w1920-h1080"
              className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/seAcFAfU8dI6Sah9_VI8K1-kv1um1zGD7lF0rQzNfSpFGH_evvFWaT1mKmLaY4gymnPdOKRkz5NU8NGzf65wiQesoPpRcTmqwgc3Vtyd2gvha0ubUouj0GRJ_tKEt3ErPySHX70=w1920-h1080"
              className="d-block"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://lh3.googleusercontent.com/rcbjomboS7Dt93qAquvs67C8OKDc6Qy25ZLEbJ-UD02hxGassAr4X2w5kZlMyrZ5HZCAv1vL5ziNJVgCGhxuAhJ7eYBH9nlLiat23easYnGx0TumwRkHv8D_467HX_fy9RRvUko=w1920-h1080"
              className="d-block"
              alt="..."
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
};

export default Banner;
