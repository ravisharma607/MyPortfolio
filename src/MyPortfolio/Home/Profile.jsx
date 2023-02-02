import React from "react";
import Typical from "react-typical";


const Profile = () => {
  document.title = 'My Portfolio';
  return (
    <>
    <div className="container">

<div className="home">
<div className="profile-details">
        <div className="heading">
          <h2><span>R</span>avi <span>R</span>aj <span>N</span>iranjan</h2>
        </div>
        <div className="heading-para">
          <h5>
          <Typical
                    loop={Infinity}
                    steps={[
                      "Front End Developer 😊.",
                      3000,
                      "Have Any Project In Mind 💡.",
                      2000,
                      `I'm Here To Design What You Love 🎁.`,
                      1000,
                    ]}
                  />
                  </h5>
        </div>
        <div className="profile-desc">
          <p>Heyy This is Ravi Raj, A passionate front end web developer from india. i am always crazy to design awesome user interfaces that enhance the best user experience.
          </p>
        </div>
        <div className="action">
        <a href="#"><button className="btn highlighted-btn">Know More </button></a>
        <a href="../Img/myResume.pdf" download="myResume.pdf"><button className="btn highlighted-btn">Get My Resume</button></a>
        </div>
      </div>

    <div className="profile-image">
      <div className="img-box">
        
      </div>
    </div>
</div>

    </div>
    </>
  );
};

export default Profile;
