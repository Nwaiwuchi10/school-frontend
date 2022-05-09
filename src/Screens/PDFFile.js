import React from "react";

import { Document, Page, Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    FontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    FontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});
const PDFFile = () => {
  <Document>
    <Page styles={styles.body}>
      <Text styles={styles.header} fixed>
        {" "}
        These errors seems to have happened due to react-scripts v5. Took me a
        day to figure out a solution while using react-router v5.
      </Text>
      <Text
        style={styles.pageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
        fixed
      />
    </Page>
  </Document>;
};

export default PDFFile;
