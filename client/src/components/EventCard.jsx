import '../css/index.css'
import '../css/App.css'
import '../css/EventCard.css'
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function App(prop) {

  return (
    <>
                <Link>
                <article className="EventCard">
                  <h3 className="EventCard__title">{prop.title}</h3>
                  <div className="EventCard__date EventCard__detail">
                    <svg
                      className="EventCard__detail__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <title>calendar-check</title>
                      <path
                        fill="currentColor"
                        d="M19,19H5V8H19M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M16.53,11.06L15.47,10L10.59,14.88L8.47,12.76L7.41,13.82L10.59,17L16.53,11.06Z"
                      ></path></svg
                    >{prop.date}
                  </div>
                  <div className="EventCard__address EventCard__detail">
                    <svg
                      className="EventCard__detail__icon"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <title>home-map-marker</title>
                      <path
                        fill="currentColor"
                        d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,14.5 12,18 12,18C12,18 8.2,14.5 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,10A1.5,1.5 0 0,0 10.5,11.5A1.5,1.5 0 0,0 12,13A1.5,1.5 0 0,0 13.5,11.5A1.5,1.5 0 0,0 12,10Z"
                      ></path></svg
                    >{prop.location}
                  </div>
                </article>
                </Link>
    </>
  )
}

export default App
