import React, { useState } from "react";
import crossLogo from '/images/cross50.jpg'

import '../css_file/addJikir.css';

function AddJikir({onAdd , onCut}) {
  const [tasbih ,setTasbih] = useState("");
  const [message ,setMessage] = useState('');
  
  const handleInput = (evt) => {
    setTasbih(evt.target.value);
  }

  const handleCross = () => {
    onCut();
  }

  const handleAdd = () => {
    if(tasbih !== ""){
      onAdd(tasbih);
      setTasbih("");
      setMessage("Tasbih Added Successfully");
    }
    else setMessage("You haven't enter anything.")
  }
  
  return (
    <div className="add-jikir-main">
      <div className="cross">
        <img className="image" src={crossLogo} 
             onClick={handleCross}
        />
      </div>
      <h1>Add A New Tasbih</h1>
      <div className="inner-div">
        <p>Tasbih : {tasbih}</p>
        
          <input type="text" placeholder="Enter Tasbih" value={tasbih}
                 className="user-input"
                 onChange={(event) => handleInput(event)}/>
          <br /><br />
          <button className="add-tasbih-button" onClick={handleAdd}>
            Add Tasbih
          </button>
        
      </div>
      <p>{message}</p>
    </div>
  );
}

export default AddJikir;
