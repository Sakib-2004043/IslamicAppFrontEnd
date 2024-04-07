import React from 'react';
import { useLocation } from "react-router-dom";


import MenuBar from './menuBar';

function Test() {
  const location = useLocation();
  const {userName} = location.state || {userName :"Guest"};

  return (<>
    <MenuBar userName = {userName}/>
    <div className="mainDiv">
      <h1>Test Field</h1>
    </div>
  </>);
}

export default Test;