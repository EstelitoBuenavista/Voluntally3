
import './css/index.css'
import './css/App.css'
import './css/Header.css'
import './css/Footer.css'

function App() {

  return (
    <>
      <footer className="Footer">
          <section className="Footer__section">
            <p className="Footer__section__title">About</p>
            <div
              className="Footer__section__contents Footer__section__contents--about"
            >
              A mix of old and new marks USC's brand of education. The
              missionary spirit is kept alive with the school's pursuit for the
              latest in science, technology, and the arts. A sense of heritage
              blends well with the Carolinian enthusiasm for the new. And this
              is best shown in the increasingly eclectic look of the school's
              architecture.
            </div>
          </section>
          <section className="Footer__section">
            <p className="Footer__section__title">Learn</p>
            <div className="Footer__section__contents">
              <ul>
                <li>What are CES Points?</li>
                <li>Why do we need CES Points?</li>
                <li>How to earn CES Points?</li>
              </ul>
            </div>
          </section>
          <section className="Footer__section">
            <p className="Footer__section__title">Legal</p>
            <div className="Footer__section__contents">
              <ul>
                <li>Student Handbook</li>
                <li>CES Points Announcement</li>
                <li>CES Policy</li>
              </ul>
            </div>
          </section>
          <section className="Footer__section">
            <p className="Footer__section__title">Contact</p>
            <div className="Footer__section__contents">
              <ul>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>map-marker</title>
                    <path
                      fill="currentColor"
                      d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
                    ></path>
                    </svg>P. del Rosario Street, Cebu City Philippines 6000
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>phone</title>
                    <path
                      fill="currentColor"
                      d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
                    ></path>
                    </svg>+63 (32) 253 1000
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>fax</title>
                    <path
                      fill="currentColor"
                      d="M19 9H18V4H8V20H22V12C22 10.34 20.66 9 19 9M10 6H16V9H10V6M14 17H10V12H14V17M16 17C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17M16 14C15.45 14 15 13.55 15 13S15.45 12 16 12C16.55 12 17 12.45 17 13S16.55 14 16 14M19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15S20 15.45 20 16C20 16.55 19.55 17 19 17M19 14C18.45 14 18 13.55 18 13S18.45 12 19 12 20 12.45 20 13 19.55 14 19 14M4.5 8C3.12 8 2 9.12 2 10.5V18.5C2 19.88 3.12 21 4.5 21S7 19.88 7 18.5V10.5C7 9.12 5.88 8 4.5 8Z"
                    ></path>
                    </svg>Fax: +63 (32) 255 4341
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>email</title>
                    <path
                      fill="currentColor"
                      d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
                    ></path>
                    </svg>information@usc.edu.ph
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>web</title>
                    <path
                      fill="currentColor"
                      d="M16.36,14C16.44,13.34 16.5,12.68 16.5,12C16.5,11.32 16.44,10.66 16.36,10H19.74C19.9,10.64 20,11.31 20,12C20,12.69 19.9,13.36 19.74,14M14.59,19.56C15.19,18.45 15.65,17.25 15.97,16H18.92C17.96,17.65 16.43,18.93 14.59,19.56M14.34,14H9.66C9.56,13.34 9.5,12.68 9.5,12C9.5,11.32 9.56,10.65 9.66,10H14.34C14.43,10.65 14.5,11.32 14.5,12C14.5,12.68 14.43,13.34 14.34,14M12,19.96C11.17,18.76 10.5,17.43 10.09,16H13.91C13.5,17.43 12.83,18.76 12,19.96M8,8H5.08C6.03,6.34 7.57,5.06 9.4,4.44C8.8,5.55 8.35,6.75 8,8M5.08,16H8C8.35,17.25 8.8,18.45 9.4,19.56C7.57,18.93 6.03,17.65 5.08,16M4.26,14C4.1,13.36 4,12.69 4,12C4,11.31 4.1,10.64 4.26,10H7.64C7.56,10.66 7.5,11.32 7.5,12C7.5,12.68 7.56,13.34 7.64,14M12,4.03C12.83,5.23 13.5,6.57 13.91,8H10.09C10.5,6.57 11.17,5.23 12,4.03M18.92,8H15.97C15.65,6.75 15.19,5.55 14.59,4.44C16.43,5.07 17.96,6.34 18.92,8M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
                    ></path>
                    </svg>usc.edu.ph
                </li>
              </ul>
            </div>
          </section>
          <div className="Footer__copyright">
            © Copyright 2023 
          </div>
        </footer>
    </>
  )
}

export default App
