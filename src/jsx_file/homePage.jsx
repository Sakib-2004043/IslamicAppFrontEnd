import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MenuBar from "./menuBar";


function HomePage() {

  const navigate = useNavigate();
  const location = useLocation();
  const {userName} = location.state || {userName :"Guest"};

  //console.log("HomPage UserName : ",userName);

  return (<>
    <MenuBar userName = {userName}/>
    <div className="mainDiv">
      <h1>Home Page</h1>
    </div>
  </>);
}

export default HomePage;
