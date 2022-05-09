import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import SignaturePad from "react-signature-canvas";

export default function Signresult() {
  let sigPad = useRef({});
  let data = "";

  const clear = () => {
    sigPad.current.clear();
  };
  function save() {
    data = sigPad.current.toDataUrl();
  }
  localStorage.setItem("signature", JSON.stringify(data));
  const show = () => {
    sigPad.current.fromDataUrl(data);
  };
  return (
    <div>
      <Button onClick={clear}>Clear</Button>
      <Button onClick={save}>Save</Button>
      <Button onClick={show}>Show</Button>
      <SignaturePad ref={sigPad} penColor="blue" />
    </div>
  );
}
