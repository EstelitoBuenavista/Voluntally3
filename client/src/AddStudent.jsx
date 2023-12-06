
import {useState} from "react";


function App() {


  return (
    <>
      <div className="App__contents">
          <div className="Add">
            <h1>Add Student</h1>
            <div className="container">
              <form id="newStudent">
                <label for="ID">ID Number</label>
                <input id="FormIDnumber" type="text" required />
                <label for="name">Name</label>
                <input id="FormFullName" type="text" required />
                <div className=''>
                <div className="flex">
                  <div className="dropdowns">
                    Course
                    <select id="FormCourse" className="ButtonDropdown">
                      <option value="Computer Science">BSCS</option>
                      <option value="Information Technology">BSIT</option>
                      <option value="Information Systems">BSIS</option>
                    </select>
                  </div>
                  <div className="dropdowns">
                    Year
                    <select id="FormYear" className="ButtonDropdown">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                </div>
                <input
                  className="ButtonAdd"
                  id="addButton"
                  type="submit"
                  value="Add"
                />
                </div>
              </form>
            </div>
          </div>
          </div>
    </>
  )
}

export default App