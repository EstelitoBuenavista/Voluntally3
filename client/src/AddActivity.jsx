import './css/Add.css'
import './css/index.css'
import './css/App.css'
import './css/ButtonAdd.css'
import { useState } from 'react'


function App() {

  const API_URL = "http://localhost:3000";
  const [Title,setTitle] = useState("")
  const [Date,setDate] = useState("")
  const [Location,setLocation] = useState("")
  const [Description,setDescription] = useState("")
  const [Points,setPoints] = useState("")

  const handleSubmit = () =>{
    const newActivity = {
      event_title: Title,
      event_date: Date,
      event_loc: Location,
      event_desc: Description,
      CES_points: Points
    };

    fetch(`${API_URL}/api/event/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newActivity),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New activity added:", data);
        window.location.href = "./ActAdmin";
      })
      .catch((error) => {
        console.error("Error adding activity:", error);
        console.log(JSON.stringify(newActivity))
      });
  }

  return (
    <>
      <div className="App__contents">
          <div className="Add">
            <h1>Add Activity</h1>
            <div className="container">
              <form id="activityForm">
                <label >Title</label>
                <input type="text" value={Title} onChange={e => setTitle(e.target.value)}required />

                <label >Date</label>
                <input type="text" value={Date} onChange={e => setDate(e.target.value)} required />

                <label>Location</label>
                <input type="text" value={Location} onChange={e => setLocation(e.target.value)}/>

                <label >Description</label>
                <input type="text" value={Description} onChange={e => setDescription(e.target.value)}/>

                <label>CES Points</label>
                <input type="text" value={Points} onChange={e => setPoints(e.target.value)}/>
                <center>
                <input
                  onClick={handleSubmit}
                  className= "ButtonAdd"
                  value="Add"
                  
                />
                </center>
              </form>
            </div>
          </div>
        </div>
    </>
  )
}

export default App