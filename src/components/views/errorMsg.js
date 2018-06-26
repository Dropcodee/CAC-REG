import React from "react";
import propTypes from "prop-types";

const ErrorMsg = ({ text }) => <span style={{ color: "#a83630" }}>{text}</span>;

ErrorMsg.propTypes = {
	text: propTypes.string.isRequired
};
export default ErrorMsg;
