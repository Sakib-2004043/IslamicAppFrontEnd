import { useState } from 'react';
import menuBarLogo from '/images/menuBar.jpeg';
import { useNavigate } from 'react-router-dom';

import crossLogo from '/images/cross50.jpg'
import homeLogo from '/images/homeSS.png'
import tasbihLogo from '/images/tasbih.png'
import salatLogo from '/images/salat2.png'
import calculatorLogo from '/images/calculator2.png'
import quizLogo from '/images/quiz.png'
import testLogo from '/images/test.png'
import islamicProfileLogo from '/images/islamicProfile.png'

function MenuBar(props) {

  const {userName} = props;

  //console.log("MenuBar UserName : ",userName);

  const navigate = useNavigate();

  const [showMenuBar,setShowMenuBar] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null);
  const [menuItem, setMenuItem] = useState(["Homepage","Track Jikir",
     "Save Salat", "Jakat Calculator","Islamic Quiz", "Test"
  ]);
  const [image,setImage] = useState([
    homeLogo,tasbihLogo,salatLogo,calculatorLogo,quizLogo,testLogo
  ])

  const handleRowClick = (event, index) => {
    if(index===0)navigate('/',{state : {userName}});
    else if(index===1)navigate('/jikirTracker',{state : {userName}});
    else if(index===2)navigate('/salatSaver',{state : {userName}});
    else if(index===3)navigate('/zakatCalculator',{state : {userName}});
    else if(index===5)navigate('/Test',{state : {userName}});
    else if(index===100)navigate('/logIn');
  }

  const handleMenuBar = () => {
    setShowMenuBar(!showMenuBar);
  }

  return (
    <>
      <div className="header-container">
        <img className="menu-bar-image" 
              src={menuBarLogo} 
              alt="image" 
              onClick={handleMenuBar}
        />
        <p className='header-message'>Day To Day Islam</p>
        <p className='inline-div'>
        <span>
          {userName}
          <br/>
          <span style={{'cursor':'pointer'}}>
            <u onClick={(e) => handleRowClick(e,100)}>{userName==="Guest"?"Log In":"Log Out"}</u>
          </span>
          
        </span>  
          <img className="menu-bar-image" 
              src={islamicProfileLogo} 
              alt="image" 
          />
        </p>
      </div>
      {showMenuBar &&
        <div className='menu-bar-container'>
          
          <table className='menu-table'>
            <thead></thead>
            <tbody>
              <tr>
              {menuItem.map((item, index) => (
                <td key={index}
                  style={{
                    backgroundColor: selectedRow === index ? "darkblue" : "green",
                    cursor: "pointer" 
                  }}
                  onMouseEnter={() => setSelectedRow(index)}
                  onMouseLeave={() => setSelectedRow(null)}
                  onClick={(event) => handleRowClick(event, index)}
                >
                <div className="inline-div">
                  <img className='home-logo' src={image[index]}/>
                  {item}
                </div>
                  
                    
                  
                </td>
              ))}
              </tr>
            </tbody>
          </table>
        </div>
      }   
    </>
  );
}

export default MenuBar;
