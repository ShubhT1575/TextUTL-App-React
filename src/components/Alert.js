import React, { useEffect, useState } from "react";

export default function Alert(props) {
  const capital = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };



  return (
    <>
      <div className="alert-container-outer">
        {props.alert && (
          <div className="alert-container">
            <div
              className={`alert alert-${props.alert.type} alert-dismissible fade show`}
              role="alert"
            >
              <strong>{capital(props.alert.type)}</strong>: {props.alert.msg}
              {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
