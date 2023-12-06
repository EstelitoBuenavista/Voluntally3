import './css/index.css'
import './css/App.css'
import './css/Admin.css'
import './css/ProfileCard.css'
import './css/EventCard.css'
import './css/home.css'
import StudTab from './components/StudTab'
import ActTab from './components/ActTab'
import EventCard from './components/EventCard'

import { useEffect, useState } from 'react'

function App() {

  const API_URL = "http://localhost:3000";
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/event/`)
      .then(response => response.json())
      .then(data => {
        setActivity(data)
        console.log(data)
      })
      .catch(error => {
        console.log("Error:", error);
      });
   }, [])

    return (
      <>
<div className="App__contents">
          <main className="Admin">
            <div className="Admin__nav">
            <StudTab/><ActTab/>
            </div>
            <h1 className="home_heading">Upcoming Events</h1>
            <section className='UpcomingEvents'>
            {activity && activity.map((item, i) => (
                  <>
                  {<EventCard 
                    title = {item.event_title} 
                    date = {item.event_date}
                    location = {item.event_loc}
                  />}
                  </>
                ))}
            </section>
          </main>
        </div>
        </>
  )
}

export default App