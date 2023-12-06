import './css/index.css'
import './css/App.css'
import './css/ProfileCard.css'
import './css/Profile.css'
import './css/ButtonAdd.css'
import './css/EventCard.css'
import {jwtDecode} from 'jwt-decode'
import profile_pic from './img/profile-picture.png'
import ButtonAdd from './components/ButtonAdd'
import ProfileEventCard from './components/ProfileEventCard'
import ProfileCard from './components/ProfileCard'

import { useEffect, useState } from 'react'

function App() {

  const API_URL = "http://localhost:3000";
  const [activity, setActivity] = useState([]);
  const [profile, setProfile] = useState();

  useEffect(() => {
    let token = localStorage.getItem('token');
    console.log(token)
    const decoded = jwtDecode(token);
    console.log(decoded)
    renderProfile(decoded.id)
   }, [])

   const renderProfile = (id)=>{
    fetch(`${API_URL}/api/event/`)
      .then(response => response.json())
      .then(data => {
        setActivity(data)
        console.log(data)
      })
      .catch(error => {
        console.log("Error:", error);
      });

      fetch(`${API_URL}/api/student/${id}`)
      .then(response => response.json())
      .then(data => {
        setProfile(data)
        console.log(data)
      })
      .catch(error => {
        console.log("Error:", error);
      });
   }

  return (
    <>

<div className="App__contents">
          <main className="Profile">
            {profile && (<ProfileCard 
            
            name = {`${profile.user.first_name} ${profile.user.last_name}`} 
            IDnumber = {profile.student.student_id} 
            points = {profile.student.points} 
            course =  {profile.student.program} 
            year = {profile.student.year}/>
            
            )}
            <h1 className="Profile__heading">Events Joined</h1>
            <section className="Profile__events">
            {activity && activity.map((item, i) => (
                  <>
                  {<ProfileEventCard 
                    title = {item.event_title} 
                    date = {item.event_date}
                    location = {item.event_loc}
                  />}
                  </>
                ))}
            </section>
            <h1 className="Profile__heading">Upcoming Events</h1>
            <section className="Profile__events">
            {activity && activity.map((item, i) => (
                  <>
                  {<ProfileEventCard 
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