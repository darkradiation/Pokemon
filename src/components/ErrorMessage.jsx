// ErrorMessage.jsx
import React from "react";

const ErrorMessage = ({ error }) => (
  <div>{error && <p className="error">{error}</p>}</div>
);

export default ErrorMessage;
