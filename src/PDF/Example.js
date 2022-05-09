import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import ReactToPrint from "react-to-print";
import { ComponentToPrint } from "./ComponentToPrint";

export const Example = () => {
  const componentRef = useRef();

  return (
    <div>
      <ComponentToPrint ref={componentRef} />
      <ReactToPrint
        trigger={() => <Button>Print this out!</Button>}
        content={() => componentRef.current}
      />
    </div>
  );
};
