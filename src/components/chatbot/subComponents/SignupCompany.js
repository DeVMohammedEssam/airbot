import React, { Component } from 'react';
import ModalProcessingLoader from "./ModalProcessingLoader";
import { connect } from "react-redux";
import { companyOnChange, setUserType } from "../../../redux/actions/user";
const handleInputFocus = e => {
  e.target.previousSibling.style.display = "none";
};
const handleInputBlur = e => {
  e.target.previousSibling.style.display = "block";
};
export function Tabs(props) {
  return (
    <React.Fragment>
      <span className="modal-tab-selector active" data-target="0" />
      <span className="modal-tab-selector" data-target="1" />
      <span className="modal-tab-selector" data-target="2" />
    </React.Fragment>
  );
}
class Content extends Component {
  state = {}

  handleOnChange = (e) => {
    const { name, value } = e.target;
    let updates = { [name]: value };
    this.props.dispatch(companyOnChange(updates));
    if (this.props.userType !== "1") {
      this.props.dispatch(setUserType("1"))//company
    }

  }
  render() {
    return (
      <div className="modal__tabs">
        <div className="modal__tabs-title">
          <img src="/imagesAndIcons/companyLogo.png" alt="" />
          <h5>Sign up as Company</h5>
        </div>
        <div className="modal__tabs-content-container">
          <div className="modal__tabs-content active " data-target="0">
            <div className="row">
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  placeholder="Company name"
                  name="companyName"
                  className="main-input"
                  onChange={this.handleOnChange}
                  value={this.props.user.companyName}
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="email"
                  placeholder="Email"
                  name="companyEmail"
                  className="main-input"
                  onChange={this.handleOnChange}
                  value={this.props.user.companyEmail}
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="password"
                  placeholder="password"
                  name="companyPassword"
                  className="main-input"
                  onChange={this.handleOnChange}
                  value={this.props.user.companyPassword}
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  type="password"
                  placeholder="password confirmation"
                  name="companyPasswordConfirmation"
                  className="main-input"
                  onChange={this.handleOnChange}
                  value={this.props.user.companyPasswordConfirmation}
                />
              </div>
            </div>
          </div>
          <div className="modal__tabs-content " data-target="1">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="fake-placeholder-container">
                  <span className="fake-placeholder">Country</span>
                  <input
                    list="country"
                    className="main-input"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    name="companyCountry"
                    onChange={this.handleOnChange}
                    value={this.props.user.companyCountry}
                  />
                  <datalist id="country">
                    <option value="Egypt">Egypt</option>
                    <option value="Borkina faso">Borkina faso</option>
                  </datalist>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="fake-placeholder-container">
                  <span className="fake-placeholder">State</span>
                  <input
                    className="main-input "
                    list="state"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    name="companyState"
                    onChange={this.handleOnChange}
                    value={this.props.user.companyState}
                  />
                  <datalist id="state">
                    <option value="calefornia" />
                    <option value="cairo" />
                  </datalist>
                </div>
              </div>
              <div className=" col-12 mt-4">
                <img
                  src="/imagesAndIcons/map-icon.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="modal__tabs-content " data-target="2">
            <div className="row">
              <span className="modal__subtitle">Social</span>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  className="main-input"
                  placeholder="Facebook"
                  name="facebookLink"
                  onChange={this.handleOnChange}
                  value={this.props.user.facebookLink}
                />
              </div>

              <div className="col-12 col-md-6">
                <input
                  type="text"
                  className="main-input"
                  placeholder="Twitter"
                  name="twitterLink"
                  onChange={this.handleOnChange}
                  value={this.props.user.twitterLink}
                />

              </div>
              <div className="col-12 col-md-6">
                <input
                  type="text"
                  className="main-input"
                  placeholder="LinkedIn"
                  name="LinkedInLink"
                  onChange={this.handleOnChange}
                  value={this.props.user.LinkedInLink}
                />
              </div>
            </div>
            <div className="row">
              <span className="modal__subtitle">company info</span>
            </div>
            <div className="row">
              <div className="col-4  col-lg-3">
                <div className="overlay-container">
                  <span className="overlay overlay--black ">
                    <span className="overlay--icon">
                      <img className="" src="/imagesAndIcons/upload.png" alt="" />
                    </span>
                  </span>

                  <img
                    className="img-fluid w-100 "
                    src="/imagesAndIcons/companyImg.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-8  col-lg-9">
                <textarea className=" h-100 main-input" name="" />
              </div>
            </div>
          </div>
          <ModalProcessingLoader />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: state.user.company,
  userType: state.user.userType
})

export const connectedContent = connect(mapStateToProps)(Content);