import React, { Component } from "react";
import { ReactToPrint } from "react-to-print";

export class PDFfiles extends Component {
  render() {
    return (
      <div>
        {" "}
        hiiiiiiiiii
        <ReactToPrint
          trigger={() => {
            return <button>Print</button>;
          }}
          content={() => this.componentRef}
          documentTitle="New Document"
          pageStyle="Print"
        />
        <div ref={(el) => (this.componentRef = el)}>
          <h2>hi bfjdggd tio gjjdgge </h2>
        </div>
      </div>
    );
  }
}

export default PDFfiles;
