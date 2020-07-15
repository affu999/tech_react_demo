import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="container-fluid nav_bg myNavbar">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid ml-4">
                <h1 className="companyName">
                  <img
                  src="https://lh3.googleusercontent.com/1zzAzveR4_AwnYq0lhX225wTeqQPJ3dw7qdgMNQYn7tR0E1_5Jbzvdv07CGXlq4gwLssGUrwCmEu7jdODv-qzrNm0kCrfAduh9UB2l4esTL3YrOEiAKL-0x0Wg6iwd08P0dYLuM=w1920-h1080"
                  alt="..."
                />
                  Tech Fierce
                </h1>
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
                <div class="collapse navbar-collapse" id="navbarText">
                  <ul class="navbar-nav ml-auto mb-2 mb-lg-0 mr-5">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="/">
                        Home
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
                        href="https://www.youtube.com/channel/UCTfAFWQdRoFFOAJmjAZQx-g"
                      >
                        <i className="fa fa-youtube-play"></i>
                        <span className="ml-2">Youtube</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link"
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
