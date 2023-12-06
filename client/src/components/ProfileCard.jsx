
import '../css/index.css'
import '../css/App.css'
import '../css/ProfileCard.css'
import '../css/Profile.css'
import '../css/ButtonAdd.css'
import profile_pic from '../img/profile-picture.png'
import ButtonAdd from '../components/ButtonAdd'

function App(prop) {

  return (
    <>
      <section className="ProfileCard">
              <img
                className="ProfileCard__image"
                src={profile_pic}
                alt="Your Profile Card"
              />
              <div className="ProfileCard__details">
                <h2 className="ProfileCard__details__name">{prop.name}</h2>
                <div className="ProfileCard__details__id">{prop.IDnumber}</div>
                <div className="ProfileCard__details__course">
                {prop.course} {prop.year}
                </div>
                <ButtonAdd link = '/login' text = "Logout"/>
              </div>
              <div className="ProfileCard__points">
                <div className="ProfileCard__points__number">{prop.points}</div>
                <div className="ProfileCard__points__subheading">CES Points</div>
              </div>
            </section>
    </>
  )
}

export default App
