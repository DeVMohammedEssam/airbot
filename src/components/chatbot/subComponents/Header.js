import React, { Component } from 'react';
import axios from "axios";
import { connect } from "react-redux";
import { setError } from "../../../redux/actions/errors";
import Modal from "../../reusable/Modal";
import {
  connectedContent as SignupTravellerContent,
  Tabs as SignupTravellerTabs
} from "./SignupTraveller";
import {
  connectedContent as SignupCompanyContent,
  Tabs as SignupCompanyTabs
} from "./SignupCompany";
import $ from "jquery";
/* modal tabs actions */
//traveller actions

const getNextSlide = () => {
  let prev = $(".travellerModal .prevSlideBtn").find("*"),
    finish = $(".travellerModal .finishButton").find("*"),
    next = $(".travellerModal .nextSlideBtn").find("*");

  $(".travellerModal")
    .find(".modal-tab-selector ,.modal__tabs-content")
    .removeClass("active");

  prev.addClass("active");
  $("#traveller-form-2").addClass("active");
  $(".modal-tab-selector[data-target='traveller-form-2']").addClass("active");
  finish.addClass("active");
  next.removeClass("active");
};

const getPrevSlide = () => {
  let prev = $(".travellerModal .prevSlideBtn").find("*"),
    finish = $(".travellerModal .finishButton").find("*"),
    next = $(".travellerModal .nextSlideBtn").find("*");
  $(".travellerModal")
    .find(".modal-tab-selector ,.modal__tabs-content")
    .removeClass("active");
  prev.removeClass("active");
  $("#traveller-form-1").addClass("active");
  $(".modal-tab-selector[data-target='traveller-form-1']").addClass("active");
  finish.removeClass("active");
  next.addClass("active");
};

const getFirstSlide = () => {
  let prev = $(" .prevSlideBtn").find("*"),
    finish = $(" .finishButton").find("*"),
    next = $(" .nextSlideBtn").find("*");
  $(".modal__tabs-content").removeClass("active");
  $(".modal__tabs-content:first-child").addClass("active");

  next.addClass("active");

}

//company actions
let i = 0;
const nextCompanySlide = () => {
  let prev = $(".companyModal .prevSlideBtn").find("*"),
    finish = $(".companyModal .finishButton").find("*"),
    next = $(".companyModal .nextSlideBtn").find("*");
  i = i + 1;
  if (i >= 2) {
    i = 2;
    next.removeClass("active");
    finish.addClass("active");
  }

  $(".companyModal")
    .find(".modal-tab-selector , .modal__tabs-content")
    .removeClass("active");
  $(`[data-target='${i}']`).addClass("active");
  prev.addClass("active");
};

const prevCompanySlide = () => {
  i = i - 1;

  let prev = $(".companyModal .prevSlideBtn").find("*"),
    finish = $(".companyModal .finishButton").find("*"),
    next = $(".companyModal .nextSlideBtn").find("*");
  next.addClass("active");
  finish.removeClass("active");
  if (i === 0) {
    prev.removeClass("active");
  }
  $(".companyModal")
    .find(".modal-tab-selector , .modal__tabs-content")
    .removeClass("active");
  $(`[data-target='${i}']`).addClass("active");
};

class Header extends Component {
  state = {};
  handleModalSubmit = e => {
    e.preventDefault();
    let prev = $(" .prevSlideBtn").find("*"),
      finish = $(" .finishButton").find("*"),
      next = $(" .nextSlideBtn").find("*");

    $(".modal-tab-selector ,.modal__tabs-content").removeClass("active");
    $(".processing").addClass("active");
    finish.removeClass("active");
    next.removeClass("active");
    prev.removeClass("active");
    const { traveller, company, userType } = this.props.user;
    let err = false;
    if (userType === "0") {
      if (traveller.password !== traveller.confirmPassword) {
        this.props.dispatch(setError("passwordConfirmError", true));
        err = true;
      }
    }
    if (userType === "1") {
      if (company.password !== company.companyPasswordConfirmation) {
        this.props.dispatch(setError("passwordConfirmError", true));
        err = true;
      }
    }
    if (err) {
      getFirstSlide();
      return;
    } else {
      const modifiedCompany = {
        facebook_url: company.facebookLink,
        twitter_url: company.LinkedInLink,
        linkidin_url: company.twitterLink,
        address: company.address,
        describtion: company.describtion,
        logo_url: company.imageFileReader,
        establishment_date: company.establishment_date,
        company_name: company.companyName,
        email: company.companyEmail,
        password: company.password

      }
      const data = userType === "0"
        ? ({ ...traveller, type: userType })
        : ({ ...modifiedCompany, type: userType });

      axios.post("https://823fd3bd.ngrok.io/api/user/", { data }).then(({ data }) => {
        $("button.close").click();
        getFirstSlide();
      })

    }


  }

  render() {
    return (
      <header className="chatbot__header">
        {/*sign up traveller modal */}
        <Modal
          nextSlide={getNextSlide}
          prevSlide={getPrevSlide}
          handleModalSubmit={this.handleModalSubmit}
          modalClass={"travellerModal"}
          id="travellerModal"
          as="traveller"
        >
          <SignupTravellerContent />
          <SignupTravellerTabs
            getNextSlide={getNextSlide}
            nextSlide={getPrevSlide}
          />
        </Modal>

        {/*sign up company modal */}
        <Modal
          id="companyModal"
          nextSlide={nextCompanySlide}
          prevSlide={prevCompanySlide}
          modalClass={"companyModal"}
          handleModalSubmit={this.handleModalSubmit}
          as="company"
        >
          <SignupCompanyContent />
          <SignupCompanyTabs />
        </Modal>

        {/* <Modal id="loginModal" modalClass={"loginModal"} /> */}
        <div className="header__cover-img-container">
          <div className="inner-cover" />
        </div>
        <aside className="header__content">
          <p className="header__text">
            the chaepest tickets Grand Est available within the past 7 days
          <br />
            were $312. prices quoted are per person, round trip, for the
          <br />
            period specified. prices and availability are subject to
          <br /> change. Additional terms apply.
        </p>

          {!localStorage.getItem("token") && (
            <React.Fragment>
              <p className="my-5 ">Now you can register with us as</p>
              <div className="header__btns-container">
                <a
                  className="btn--orange btn-navbar--custom px-5 py-2 mr-4"
                  href="#travellerModal"
                  data-toggle="modal"
                  role="button"
                >
                  <span>Trveller </span>
                  <img href="" alt="" />
                </a>
                <a
                  className="btn--lightBlue btn-navbar--custom px-5 py-2 btn-hasIcon "
                  href="#companyModal"
                  data-toggle="modal"
                  role="button"
                >
                  <img
                    className="btn__icon icon-left"
                    src="/imagesAndIcons/companyLogo.png"
                    alt=""
                  />
                  <span>Company</span>
                </a>
                <div className="header__icons-container mt-5">
                  <img src="/imagesAndIcons/messenger-1.png" alt="" />
                  <img src="/imagesAndIcons/movie-tickets.png" alt="" />
                  <img src="/imagesAndIcons/secure.png" alt="" />
                </div>
              </div>
            </React.Fragment>
          )}

        </aside>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({ user: state.user, error: state.error });
export default connect(mapStateToProps)(Header);
