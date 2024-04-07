import React,{ useState,useEffect } from "react";
import jikirService from "../services/jikirService";
import AddJikir from "./addJikir";
import { useLocation } from "react-router-dom";
import MenuBar from "./menuBar";
import crossLogo from '/images/cross50.jpg'


function JikirTracker(){

  let k=true;

  const location = useLocation();
  const {userName} = location.state || {userName :"Guest"};
  //console.log("jikirTracker UserName : ",userName);

  const [inputValue, setInputValue] = useState(0);

  const [tasbih , setTasbih] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [showAddJikir, setShowAddJikir] = useState(false);
  const [indx, setIndx] = useState(-1);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchGetJikir = async() => {
      try {
        const result = await jikirService.getJikirs(userName);
        const temp = result.data.data[0].jikir;
        setTasbih(temp);
      } 
      catch (error) {
        console.error("Error fetching Jikirs: ", error)
      }
    }
    fetchGetJikir();
    
  },[]);
 
  const handleRowClick = (_,rowData,idx) => {
    if(k)setSelectedData(rowData); 
    setIndx(idx);
    setMsg("");
    k=true;
  };

  const handleCutAddJikir = () => {
    setShowAddJikir(false);
  }

  const updateJikir = async(updatedTasbih) => {
    const jikirData = {
      userName: userName,
      jikir: updatedTasbih
    }
    try {
      await jikirService.update(JSON.stringify(jikirData));
    } 
    catch (error) {
      console.log(error.message);
    }
  }

  const handleAddJikir = async(tasbihName) => {

    const newTasbih = {
      name: tasbihName,
      totalCount:0,
      monthlyCount:0,
      weeklyCount:0,
      dailyCount:0
    }
    const updatedTasbih = [...tasbih, newTasbih];
    setTasbih(updatedTasbih);
    updateJikir(updatedTasbih);
    
  }

  const handleCountUpdate = () => {

    //const jikir = parseInt(document.getElementById("increaseCount").value);
    //document.getElementById("increaseCount").value=0;
    const jikir = inputValue===""?0:parseInt(inputValue);
    setInputValue(0);
    const updatedTasbih = [...tasbih];
    updatedTasbih[indx].dailyCount += jikir; 
    updatedTasbih[indx].weeklyCount += jikir; 
    updatedTasbih[indx].monthlyCount += jikir; 
    updatedTasbih[indx].totalCount += jikir; 
    setTasbih(updatedTasbih);
    updateJikir(updatedTasbih);

    setMsg("Jikir Count Updated");
  }

  function handleDelete(_,idx){
    if(window.confirm("Are you sure to delete this tasbih?")){
      const confirmation = window.confirm("Are you sure you want to delete this tasbih?");
      if (confirmation){
        const updatedTasbih = tasbih.filter((_,i) =>  i !== idx);
        setTasbih(updatedTasbih);
        updateJikir(updatedTasbih);
      }
    }
    k=false;
    setSelectedData(null);
    setSelectedRow(null);  
  }

  return(<>
    
    <MenuBar userName = {userName}/>
    
    <div className="mainDiv">
      <h1>Save Your Daily Jikir</h1>

      <div>
        {selectedData && (
          
          <div className="add-count-container">
            <div className="cross">
            <img className="image" src={crossLogo} 
              onClick={() => setSelectedData(false)}
            />
            </div>
            <h2>Increase Count Of Your Selected Tasbih</h2>
            <p>Tasbih: {selectedData.name}</p>
            <div className="inline-div">
              <input type="number" placeholder="Add Count" 
                    id="increaseCount" 
                    value={inputValue}
                    className="add-count-input"
                    onChange={(e) => setInputValue(e.target.value)}
              />
              <button className="add-count-button" onClick={handleCountUpdate}>
                Add Count
              </button>
            </div>
            <p>{msg}</p>
          </div>
        )}
      </div>

      <table className="table">
	      <thead>
          <tr>
            <th>Number</th>
            <th>Tasbih</th>
            <th>Total Count</th>
            <th>Monthly Count</th>
            <th>Weekly Count</th>
            <th>Daily Count</th>
            <th>Delete Tasbih</th>
          </tr>
        </thead>
        <tbody>
          {tasbih.map((tasbi, index) => (
			    <tr key={index}
              style={{
                backgroundColor: selectedRow === index ? "darkblue" : "green",
              }}
              onMouseEnter={() => setSelectedRow(index)}
              onMouseLeave={() => setSelectedRow(null)}
              onClick={(event) => handleRowClick(event,tasbi,index)}
          >
				    <td>
					    {index+1}
				    </td>
				    <td>
					    {tasbi.name}
				    </td>
            <td>
              {tasbi.totalCount}
				    </td>
            <td>
              {tasbi.monthlyCount}
				    </td>
            <td>
              {tasbi.weeklyCount}
				    </td>
            <td>
              {tasbi.dailyCount}
				    </td>
            <td>
              <button className="delete-button" 
                      onClick={(e) => handleDelete(e,index)}
              >Delete
              </button>
            </td>  
			    </tr>
		      ))}		      
	      </tbody>
      </table>
      <br />
      <button className="add-jikir-button" onClick={() => setShowAddJikir(true)}>
        Add A New Tasbih
      </button>
    </div>
    {showAddJikir && <AddJikir onCut={handleCutAddJikir} onAdd={handleAddJikir} />}
  </>);

}
export default JikirTracker;


