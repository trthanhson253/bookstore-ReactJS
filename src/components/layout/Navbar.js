import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../static/img/logo.png";
const Navbar = () => {
  return (
    <div className="bea-portal-body-content" id="bea-portal-body-content">
      <div className="bea-portal-body-header">
        <div className="bea-portal-book-primary">
          <div id="alibris-header-red">
            <div className="offer-bar">
              <h2>Welcome to BookStore Demo Page REACTJS</h2>
            </div>
            <div className="navbar yamm">
              <div
                id="navbar-collapse-grid"
                className="navbar-collapse collapse"
              >
                <ul className="nav navbar-nav">
                  <li className="alibris-logo">
                    <Link className="navbar-brand" to="#">
                      <img
                        src={require("../../static/img/logo.png")}
                        alt="logo"
                        style={{ marginTop: "-50px" }}
                      />
                    </Link>
                  </li>
                  <li className="dropdown yamm-fw">
                    <Link
                      href="javascript:;"
                      className="dropdown-toggle nav-top"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={require("../../static/img/list.png")} />
                      &nbsp;Categories
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="grid-subnav">
                        <div className="row">
                          <div className="subnav-container">
                            <ul className="trigger-menu" role="menu">
                              <li
                                className="trigger-item maintainHover"
                                data-submenu-id="books-subjects"
                              >
                                Books List By Subjects
                                <span className="menu-chevron">&gt;</span>
                                <div
                                  id="books-subjects"
                                  className="popover"
                                  style={{
                                    display: "block",
                                    top: "0px",
                                    left: "220px"
                                  }}
                                  data-original-title
                                  title
                                >
                                  <div className="sub-panel-content">
                                    <div className="row">
                                      <div className="col-sm-2">
                                        <ul className="submenu-inner first clearfix">
                                          <li>
                                            <Link to="#">cate.name</Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown yamm-fw">
                    <Link
                      to="#"
                      className="dropdown-toggle nav-top"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                      >
                        <strong>All Books</strong>
                      </div>
                    </Link>
                  </li>
                </ul>
                <div className="login-nav">
                  <ul className="nav navbar-nav">
                    <li className="dropdown">
                      <Link to="#" className="dropdown-toggle sign-in"></Link>
                      <div className="name" title="son">
                        <Link to="#" className="dropdown-toggle sign-in"></Link>
                        <Link to="/login">
                          <strong>Sign In</strong>
                        </Link>
                      </div>
                    </li>
                    <li className="dropdown">
                      <Link to="#" className="dropdown-toggle sign-in">
                        <div className="name" title="son">
                          Favorite List
                        </div>
                        <b className="caret" />
                      </Link>
                      <ul
                        className="dropdown-menu dropdown-menu-right account "
                        style={{ display: "none", width: "350px" }}
                      >
                        <li>
                          <div className="yamm-content">
                            <div className="form-group">
                              <div
                                className="row"
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif"
                                }}
                              >
                                <div
                                  className="col-lg-12"
                                  style={{ height: "100%" }}
                                >
                                  <div className="col-lg-4">
                                    <Link to="#">
                                      <img
                                        className="card-img-top"
                                        style={{
                                          width: "60px",
                                          height: "60px"
                                        }}
                                      />
                                    </Link>
                                  </div>
                                  <div className="col-lg-6">
                                    <Link to="#">
                                      <strong>a</strong>
                                    </Link>
                                    <p>by </p>
                                  </div>
                                  <Link
                                    href="javascript:;"
                                    className="col-lg-2"
                                  >
                                    Remove
                                  </Link>
                                  <br />
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <Link to="#" className="dropdown-toggle sign-in">
                        <div className="name" title="son">
                          <img
                            src="
                            'http://localhost:8184/image/user/' 
                            
                          "
                            border={0}
                            style={{ height: "15px", width: "20px" }}
                          />
                        </div>
                        <b className="caret" />
                      </Link>
                      <ul
                        className="dropdown-menu dropdown-menu-right account "
                        style={{ display: "none" }}
                      >
                        <li>
                          <div className="yamm-content">
                            <div className="form-group">
                              <p
                                style={{
                                  fontFamily: "Arial, Helvetica, sans-serif"
                                }}
                              >
                                Signed in as <strong>name</strong>
                              </p>
                              {/* <p style="font-family:Arial, Helvetica, sans-serif">
                            <strong>.... {{ currentUser.email | slice:8 }}</strong>
                          </p> */}
                              <hr />
                              <Link to="#">My Account</Link>
                              <Link to="#">My Address</Link>
                              <Link to="#">My Card</Link>
                              <Link to="#">My Order</Link>
                              <Link to="#">My Favorite Book</Link>
                              <hr />
                            </div>
                            <div className="form-group">
                              <Link to="#" className="btn btn-lg btn-main">
                                Sign Out
                              </Link>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="cart-nav">
                      <Link to="#" className="dropdown-toggle cart">
                        <img
                          src={require("../../static/img/cart.png")}
                          border={0}
                          alt="View Cart"
                        />
                        (<span id="cart-items-text">cartItemNumber</span>)
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="search-container">
              <form>
                <div className="search-nav">
                  <label htmlFor="searchBox" className="visuallyhidden">
                    Search Your Book Here
                  </label>
                  <span>
                    <input
                      type="text"
                      id="keyword"
                      name="keyword"
                      className="form-control search-input ui-autocomplete-input"
                      placeholder="Search Your Book Here"
                      autoComplete="off"
                    />
                  </span>
                </div>
                <div className="selection">
                  <div className="select-style">
                    <label htmlFor="mtypeMenu" className="visuallyhidden">
                      Select Book Format Menu
                    </label>
                    <select
                      className="selectpicker"
                      name="searchOption"
                      id="searchOption"
                      aria-label="formats"
                    >
                      <option data-icon="icon-heart">Search All</option>
                      <option data-icon="icon-heart">Search by Title</option>
                      <option data-icon="icon-heart">Search by Author</option>
                      <option data-icon="icon-heart">
                        Search by Publisher
                      </option>
                      <option data-icon="icon-heart">Search by ISBN</option>
                    </select>
                  </div>
                </div>
                <input
                  name="hs"
                  id="sbSubmit"
                  type="image"
                  defaultValue="Submit"
                  src={require("../../static/img/mag-glass.gif")}
                  alt="search go button"
                />
              </form>
            </div>
          </div>
          <hr
            style={{
              height: "12px",
              border: 0,
              boxShadow: "inset 0 12px 12px -12px rgba(0, 0, 0, 0.5)"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
