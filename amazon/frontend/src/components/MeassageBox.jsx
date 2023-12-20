import React from "react";
import Alert from "react-bootstrap/Alert";
function MeassageBox(props) {
  return <Alert variant={props.variant || "info"}>{props.children}</Alert>;
}

export default MeassageBox;
