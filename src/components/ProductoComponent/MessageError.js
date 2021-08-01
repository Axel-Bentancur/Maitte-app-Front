import React from "react";

export default function MessageError() {
  return (
    <>
      <i className="fas fa-exclamation-circle"></i>
      <small className="error-msg">
        Este campo debe poseer al menos 3 caracteres.
      </small>
    </>
  );
}
