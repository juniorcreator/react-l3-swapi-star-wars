import React from "react";
import "./ErrorRequest.scss";

const ErrorRequest = ({ handleCloseErrorRequest }) => {
  return (
    <div className="error-request">
      <p className="error-request__text">
        Hey I am reall sorry but there is some error in your request, <br /> but
        I have some idea, try to check your request <br /> hope this problem
        will gone
      </p>
      <button
        onClick={handleCloseErrorRequest}
        type="button"
        className="btn btn-info"
      >
        Close this window
      </button>
    </div>
  );
};

export default ErrorRequest;
