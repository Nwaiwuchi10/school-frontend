import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import SignaturePad from "react-signature-canvas";

const Signature = () => {
  let sigPad = useRef({});
  let data = "";

  function clear() {
    sigPad.current.clear();
  }

  function save() {
    data = sigPad.current.toDataURL();
  }

  function show() {
    sigPad.current.fromDataURL(data);
  }

  return (
    <div className={"signature"}>
      <Button onClick={clear}>clear</Button>
      <Button onClick={save}>Save</Button>
      <Button onClick={show}> Show</Button>
      <SignaturePad ref={sigPad} penColor="black" />
    </div>
  );
};

export default Signature;
