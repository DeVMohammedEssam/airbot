import React, { Component } from 'react';
class Modal extends Component {

  render() {
    let tabsContent = this.props.children.filter(
      child => child.type.name === "Content" || "Connect(Content)"
    )[0];
    let Tabs = this.props.children.filter(child => child.type.name === "Tabs")[0];

    return (
      <React.Fragment>
        <form
          className={this.props.modalClass}
          action=""
          method="get"
          onSubmit={this.props.handleModalSubmit}
        >
          <div className="modal fade" tabIndex="-1" role="dialog" id={this.props.id}>
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">{Tabs}</div>
                <div className="modal-body">{tabsContent}</div>
                <div className="modal-footer">
                  <div className="prevSlideBtn">
                    <button
                      onClick={this.props.prevSlide}
                      type="button"
                      className=" prevSlideBtn btn modal__next-btn btn--orange "
                    >
                      prev
                  </button>
                  </div>
                  <div className="nextSlideBtn">
                    <button
                      onClick={this.props.nextSlide}
                      type="button"
                      className="  btn modal__next-btn btn--lightBlue active "
                    >
                      next
                  </button>
                  </div>
                  <div className="finishButton">
                    <input
                      className="finishButton btn modal__next-btn btn--lightBlue "
                      type="submit"
                      value="finish"
                    />
                  </div>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" style={{ width: "25px", height: "25px", visibility: "hidden" }}>
                    &times;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}


export default Modal;
