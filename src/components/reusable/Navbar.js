import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { logout } from "../../redux/actions/user";
import { connect } from "react-redux";
import $ from "jquery"
const onSearch = (e) => {
  e.preventDefault()
  window.location.href = "/trips?search=" + $("#search").val()
}
const Navbar = props => {

  return (<nav className="navbar navbar-expand-lg bg-orange">
    <div className="container">
      <Link to="/trips" className="navbar-brand" >
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto w-100">
          {!props.loggedUser && ( //show only when not logged in
            <li className="nav-item">
              <NavLink
                className="nav-link"
                exact
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
          )}
          <li className="nav-item">
            <NavLink
              className="nav-link"
              exact
              to="/trips"
              activeClassName="active"
            >
              Trips
              </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              exact
              to="/Chatbot"
              activeClassName="active"
            >
              Chatbot
              </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/about"
            >
              About
              </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeClassName="active"
              to="/price"
            >
              Price
              </NavLink>
          </li>
          <form
            onSubmit={onSearch}
            method="post"
            className="form-inline my-2 my-lg-0 mx-auto"
          >
            <div className="form-group navbar__search-container">
              <input
                className="form-control mr-sm-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                name="search"
                id="search"

                placeholder="find your trips..."
              />
              <button className=" btn my-2 my-sm-0" type="submit">
                <i className="fa fa-search" />
              </button>
            </div>
          </form>

          <div className="d-flex align-items-center">
            <div className="dropdown  mr-2">
              <li className="nav-item dropdown ml-auto ">
                <a
                  className="nav-link dropdown-toggle btn-navbar--custom"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  my account
                  </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                >
                  {props.loggedUser ? (
                    <div>
                      <Link className="nav-link bg-info" to="/dashboard">
                        my trips
                      </Link>

                      {props.loggedUser.type === 1 && (/* show only if company */
                        <Link
                          className="nav-link bg-info"
                          to="/dashboard"
                        >
                          Dashboard
                        </Link>

                      )}

                      <button className="btn btn-sm btn-link  "
                        onClick={() => { props.dispatch(logout()); props.history.push("/") }}
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                      <a className="dropdown-item" href="#loginModal" data-toggle="modal" role="button">
                        <span>Login</span>
                        <img
                          className="ml-4"
                          src="/imagesAndIcons/login.png"
                          alt=""
                        />
                      </a>
                    )}

                </div>
              </li>
            </div>

          </div>
          {props.loggedUser && (
            <li className="nav-item d-flex align-items-center">
              <span className="text-light font-weight-bold">
                Signed in as: {props.loggedUser.name}
              </span>

            </li>
          )}

        </ul>
      </div>
    </div>
  </nav >
  )
};
const mapStateToProps = (state) => ({ loggedUser: state.user.loggedUser });
export default connect(mapStateToProps)(withRouter(Navbar));
