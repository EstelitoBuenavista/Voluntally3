
import '../css/index.css'
import '../css/App.css'
import { Routes, Route, Link } from 'react-router-dom';

function App(prop) {

  return (
    <>
    <Link to = '/ActAdmin'>
        <button className={"Admin__nav__option activities" + prop.status } id="activityTab">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20">
                  <title>calendar-week-begin-outline</title>
                  <path
                    fill="currentColor"
                    d="M19 3C20.11 3 21 3.89 21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.9 3 5 3H6V1H8V3H16V1H18V3H19M19 19V9H5V19H19M19 7V5H5V7H19M7 11H9V17H7V11"
                  ></path>
            </svg>
        </button>
    </Link>
    </>
  )
}

export default App
