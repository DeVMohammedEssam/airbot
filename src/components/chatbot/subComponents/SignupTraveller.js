import React, { Component } from 'react';
import ModalProcessingLoader from "./ModalProcessingLoader";
import { travellerOnChange, setUserType } from "../../../redux/actions/user";
import { connect } from "react-redux";


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
                    name="name"
                    placeholder="Name..."
                    onChange={this.handleOnChange}
                    value={this.props.user.name}
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
                    name="password"
                    type="password"
                    placeholder="password.."
                    min="4"
                    onChange={this.handleOnChange}
                    value={this.props.user.password} />
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

                {this.props.error.passwordConfirmError && (
                  <span className="text-danger col-12"> password doesn't match confirmation </span>
                )}

              </div>
            </div>
          </div>
        </div>
        <div className="modal__tabs-content fade show mt-5" id="traveller-form-2">
          <div className="row">
            <div className="col-12">
              <input
                type="number"
                required
                className="main-input"
                name="phone"
                placeholder="phone.."
                onChange={this.handleOnChange}
                value={this.props.user.phone} />
            </div>

            <div className="col-12">
              <input
                required
                className="main-input"
                name="age"
                type="number"
                placeholder="Age..."
                onChange={this.handleOnChange}
                value={this.props.user.age} />
            </div>
            <div className="col-12" >
              <select name="gender" className="main-input" onChange={this.handleOnChange} defaultValue={this.props.user.gender}>
                <option value="male" >Male</option>
                <option value="female">female</option>
              </select>
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
  userType: state.user.userType,
  error: state.error
})

export const connectedContent = connect(mapStateToProps)(Content);
