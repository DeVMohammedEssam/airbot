import React, { Component } from 'react';
import ModalProcessingLoader from "./ModalProcessingLoader";
import { connect } from "react-redux";
import { companyOnChange, setUserType } from "../../../redux/actions/user";
import ImageFileReader from "../../reusable/ImageFileReader";
import $ from "jquery";
/* const handleInputFocus = e => {
  e.target.previousSibling.style.display = "none";
};
const handleInputBlur = e => {
  e.target.previousSibling.style.display = "block";
}; */
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
  state = {
    updates: {}
  }

  handleOnChange = (e) => {

    const { name, value } = e.target;
    let updates = {};
    if (name === "imageFileReader") {
      let reader = new FileReader();
      let file = $(".upload-image__file")[0].files[0]
      reader.onloadend = () => {
        $(".upload-image").css("background-image", "url(" + reader.result + ")");
        updates = { ...{ [name]: reader.result } };
        this.props.dispatch(companyOnChange(updates));
      }
      reader.readAsDataURL(file);
    } else {
      updates = { [name]: value };
    }
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
                  required
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
                  required
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
                  required
                  type="password"
                  placeholder="password"
                  name="password"
                  className="main-input"
                  onChange={this.handleOnChange}
                  value={this.props.user.password}
                />
              </div>
              <div className="col-12 col-md-6">
                <input
                  required
                  type="password"
                  placeholder="password confirmation"
                  name="companyPasswordConfirmation"
                  className="main-input"
                  onChange={this.handleOnChange}
                  value={this.props.user.companyPasswordConfirmation}
                />
              </div>
              {this.props.error.passwordConfirmError && (<div className="col-12 text-danger ">password doesn't match confirmation</div>)}

            </div>
          </div>
          <div className="modal__tabs-content " data-target="1">
            <div className="row">
              <div className="form-group col-12">
                <label>Address:</label>
                <input
                  required
                  type="text"
                  className="main-input btn-block"
                  name="address"
                  placeholder="Address.."
                  onChange={this.handleOnChange}
                  value={this.props.user.companyCountry}
                />
              </div>
              <div className="form-group col-12">
                <label>Establishment Date:</label>
                <input
                  required
                  type="date"
                  className="main-input btn-block"
                  name="establishment_date"
                  onChange={this.handleOnChange}
                  value={this.props.user.establishment_date}
                />
              </div>
              <div className=" col-12 mt-4">
                <img
                  src="/imagesAndIcons/map-icon.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              {/*   <div className="col-12 col-md-6">
                <div className="fake-placeholder-container">
                  <span className="fake-placeholder">Country</span>
                  <input
                  required
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
                  required
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
              </div>*/}
            </div>
          </div>

          <div className="modal__tabs-content " data-target="2">
            <div className="row">
              <span className="modal__subtitle">Social</span>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <input
                  required
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
                  required
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
                  required
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
                <ImageFileReader onChange={this.handleOnChange} />
              </div>
              <div className="col-8  col-lg-9">
                <textarea className=" h-100 main-input" name="describtion" onChange={this.handleOnChange} />
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
  userType: state.user.userType,
  error: state.error
})

export const connectedContent = connect(mapStateToProps)(Content);