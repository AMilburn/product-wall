import React from "react";
import PropTypes from "prop-types";
import * as userActions from "../actions/userActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./SignIn.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined,
      recognitionInProgress: false
    };
    this.onVideoPlaying = this.onVideoPlaying.bind(this);
    this.captureUserSnapshot = this.captureUserSnapshot.bind(this);
    this.submitUserSnapshot = this.submitUserSnapshot.bind(this);
  }
  componentDidMount() {
    this.setState({
      recognitionInProgress: true
    });
    this.startWebcamStream();
  }
  startWebcamStream() {
    // cross-browser bullshit
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;
    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        // constraints
        {
          video: true,
          audio: false
        },
        // successCallback
        function(localMediaStream) {
          const video = document.querySelector("video");
          video.src = window.URL.createObjectURL(localMediaStream);
        },

        // errorCallback
        function(err) {
          this.errorCondition("The following error occured: " + err);
        }
      );
    } else {
      this.errorCondition("user video not supported");
    }
  }
  errorCondition(strCondition) {
    this.setState({
      error: strCondition,
      recognitionInProgress: false
    });
  }
  onVideoPlaying() {
    console.log("video ready");
    setTimeout(this.captureUserSnapshot, 250);
  }
  captureUserSnapshot() {
    console.log("capturing snapshot");
    const video = document.getElementById("video");
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    // Draws current image from the video element into the canvas
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    // assign raw bytes to hidden input
    // document.getElementById("rawImage").value = canvas.toDataURL("image/jpg");
    this.submitUserSnapshot();
  }
  submitUserSnapshot() {
    // submit the form
    console.log("submitting snapshot");
    const canvas = document.getElementById("myCanvas");
    this.props.userActions.fetchUserData(canvas.toDataURL("image/jpg"));
  }
  render() {
    const label = this.state.recognitionInProgress
      ? "Authenticating"
      : "Success!";
    return !this.state.error ? (
      <div className="landingPage__photo">
        <video
          className="hidden"
          width="400"
          height="400"
          id="video"
          autoPlay
          onPlay={this.onVideoPlaying}
        />
        <button className="headline-xlg-base">{label}</button>
        <p>
          <canvas id="myCanvas" width="400" height="300" className="hidden" />
        </p>
      </div>
    ) : (
      <div className="landingPage__photo">
        <p>{this.state.error}</p>
      </div>
    );
  }
}

SignIn.propTypes = {
  userActions: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  userActions: bindActionCreators(userActions, dispatch)
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
