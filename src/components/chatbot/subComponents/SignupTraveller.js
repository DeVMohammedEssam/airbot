import React, { Component } from 'react';
import ModalProcessingLoader from "./ModalProcessingLoader";
import { travellerOnChange, setUserType } from "../../../redux/actions/user";
import { connect } from "react-redux";


const handleInputFocus = e => {
  e.target.previousSibling.style.display = "none";
};
const handleInputBlur = e => {
  e.target.previousSibling.style.display = "block";
};


export function Tabs(props) {

  return (
    <React.Fragment>
      <span
        className="modal-tab-selector active"
        data-target="traveller-form-1"
        onClick={props.getPrevSlide}
      />
      <span
        className="modal-tab-selector"
        data-target="traveller-form-2"
        onClick={props.getNextSlide}
      />
    </React.Fragment>
  );
}

class Content extends Component {

  handleOnChange = (e) => {
    const { name, value } = e.target;
    let updates = { [name]: value };
    this.props.dispatch(travellerOnChange(updates));
    if (this.props.userType !== "0") this.props.dispatch(setUserType("0"));//traveller
  }

  render() {
    return (
      <div className="modal__tabs">
        <div className="modal__tabs-title text-center ">
          <img src="" alt="" />
          <h5>Sign up as traveler</h5>
        </div>
        <div className="modal__tabs-content-container">
          <div className="modal__tabs-content active" id="traveller-form-1">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6">
                  <input
                    required
                    className="main-input"
                    name="firstName"
                    placeholder="first name.."
                    onChange={this.handleOnChange}
                    value={this.props.user.firstName}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    required
                    className="main-input"
                    name="email"
                    placeholder="Eamail address.."
                    onChange={this.handleOnChange}
                    value={this.props.user.email}

                  />
                </div>

                <div className="col-12 col-md-6">
                  <input
                    required
                    className="main-input"
                    name="lastName"
                    placeholder="last name.."
                    onChange={this.handleOnChange}
                    value={this.props.user.lastName} />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    required
                    className="main-input"
                    name="password"
                    type="password"
                    placeholder="password.."
                    onChange={this.handleOnChange}
                    value={this.props.user.password} />
                </div>
                <div className="col-12 col-md-6 ">
                  <div className="d-flex justify-content-between ">
                    <div className="">
                      <select name="gender" className="main-input" onChange={this.handleOnChange} defaultValue={this.props.user.gender}>
                        <option value="male" >Male</option>
                        <option value="female">female</option>
                      </select>
                    </div>
                    <div className="btn-hasIcon btn ">
                      <input
                        required
                        name="date"
                        type="date"
                        className="main-input"
                        onChange={this.handleOnChange}
                        value={this.props.user.date} />
                      <img
                        src="/imagesAndIcons/calendar.png"
                        className="img-icon-calender"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <input
                    required
                    className="main-input"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password.."
                    onChange={this.handleOnChange}
                    value={this.props.user.confirmPassword}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal__tabs-content fade show mt-5" id="traveller-form-2">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="fake-placeholder-container">
                <span className="fake-placeholder">Country</span>
                <input
                  required
                  list="country"
                  className="main-input"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  name="country"
                  onChange={this.handleOnChange}
                  value={this.props.user.country}
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
                  required
                  className="main-input "
                  list="state"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                  name="state"
                  onChange={this.handleOnChange}
                  value={this.props.user.state}
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
        <ModalProcessingLoader />
      </div>
    );
  }
}
const mapStateToProps = (state, props) => ({
  user: state.user.traveller,
  userType: state.user.userType
})

export const connectedContent = connect(mapStateToProps)(Content);
