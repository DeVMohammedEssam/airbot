import React, { Component } from 'react';
import Axios from 'axios';
import { login } from "../../../redux/actions/user";
import { connect } from "react-redux";
import { setError } from "../../../redux/actions/errors";
import $ from "jquery";
class LoginModal extends Component {
    state = {
        email: "",
        password: ""
    }
    handleModalSubmit = (e) => {
        e.preventDefault();
        Axios.post("https://823fd3bd.ngrok.io/api/user/login", { data: { ...this.state } }).then(({ data }) => {
            console.log(this.state);

            if (data.success === true) {
                localStorage.setItem("token", data.token);
                $("button.close").click();
                this.props.dispatch(login());
            } else {
                this.props.dispatch(setError("loginError", "wrong email or password !"));
            }
        })
    }
    inputChangeHandler = (e) => {
        const { name, value } = e.target;
        this.setState(() => ({ [name]: value }))
    }
    componentDidMount() {

    }
    render() {
        return (
            <form
                onSubmit={this.handleModalSubmit}
            >
                <div className="modal fade" tabIndex="-1" role="dialog" id="loginModal">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content ">
                            <div className="modal-body ">
                                <h3 className="login-modal__title">Login:</h3>
                                <input name="email" onChange={this.inputChangeHandler} value={this.state.email} type="email" placeholder="email.." className="main-input" required />
                                <input name="password" onChange={this.inputChangeHandler} value={this.state.password} type="password" placeholder="password.." className="main-input" required />
                                {this.props.error && (<span className="text-danger">{this.props.error.loginError}</span>)}
                            </div>
                            <div className="modal-footer">

                                <input
                                    className=" btn  btn--lightBlue "
                                    type="submit"
                                    value="Login"
                                />
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="#loginModalClose" style={{ width: "25px", height: "25px", visibility: "hidden" }}>
                                    &times;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
const mapStateToProps = (state) => ({
    error: state.error
})
export default connect(mapStateToProps)(LoginModal);