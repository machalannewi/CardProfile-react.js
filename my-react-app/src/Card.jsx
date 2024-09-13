import profilePic from "./assets/machala-image2.jpg"
import profilePic2 from "./assets/jennifer.jpg"
import profilePic3 from "./assets/pidas team 2.jpg"
import profilePic4 from "./assets/freeman.jpg"

function Card() {
  
  return (
    <>
    <div className="card">
      <img className="card-image" src={profilePic} alt="profile picture" />
      <div className="card-details">
      <h2 className="card-title">Voyage</h2>
      <p className="card-text">I am a Front-end developer and I like playing Football</p>
      </div>
    </div>
    <div className="card">
      <img className="card-image" src={profilePic2} alt="profile picture" />
      <div className="card-details">
      <h2 className="card-title">JennyKoko</h2>
      <p className="card-text">I am a Physiotherapist and I love reading</p>
      </div>
    </div>
    <div className="card">
      <img className="card-image" src={profilePic3} alt="profile picture" />
      <div className="card-details">
      <h2 className="card-title">Arnold</h2>
      <p className="card-text">I am an Anatomist that loves teaching</p>
      </div>
    </div>
    <div className="card">
      <img className="card-image" src={profilePic4} alt="profile picture" />
      <div className="card-details">
      <h2 className="card-title">Grandline </h2>
      <p className="card-text">I am a Web/App developer. I am Introverted</p>
      </div>
    </div>
    </>

  );
}

export default Card