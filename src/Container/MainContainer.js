import React from "react";
import Navbar from "../Components/Navbar/Navbar";
function MainContainer(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}

export default MainContainer;
