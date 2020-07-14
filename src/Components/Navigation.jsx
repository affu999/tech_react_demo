import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="container-fluid nav_bg myNavbar">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid ml-4">
                <img
                  src="https://lh3.googleusercontent.com/iDFGIhFMUhMiMGGyx-cijYlv4nYZY3_JGNOwTtGJh0etnKP1jwoqtU7H_dBsQEmS9wLHUAjzJ0amQycC9UKJr4IeFY5Mc9srPneJ_CmXiL2zXY5d4yZIPEQzatLfigQPhHDwoo4=w1920-h1080"
                  alt="..."
                />
                <h1 className="companyName">Tech Fierce</h1>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0 mr-5">
                    <li className="nav-item mr-3">
                      <a
                        href="/"
                        className="nav-link active"
                       >
                        <span className="ml-2 home">Home</span>
                      </a>
                    </li>
                    <li className="nav-item mr-3">
                      <a
                        href="https://www.youtube.com/channel/UCTfAFWQdRoFFOAJmjAZQx-g"
                        className="nav-link active"
                        aria-current="page"
                      >
                        <i className="fa fa-youtube-play"></i>
                        <span className="ml-2">Youtube</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://www.instagram.com/techfierce/"
                      >
                        <i className="fa fa-instagram fa-1x"></i>
                        <span className="ml-2">Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
