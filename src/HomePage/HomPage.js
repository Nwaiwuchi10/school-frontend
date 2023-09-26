import React from "react";
import Outline from "../Pages/Outline";
import Welcome from "../Pages/Welcome";
import Welcome2 from "../Pages/Welcome2";
import LastestPost from "../Ui/LastestPost";

const HomPage = () => {
  return (
    <div>
      <Welcome />
      <Outline />
      <br />
      <LastestPost />
    </div>
  );
};

export default HomPage;
