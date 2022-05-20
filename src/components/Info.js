import React from "react";
import Profile_Pic from "../images/profile-pic.jpg";

function Info() {
  return (
    <div className="container">
      <main className="info">
        <img src={Profile_Pic} alt="Profile" className="profile-pic" />
        <div className="text-info">
          <h3 className="name">David Koffi Amegayibor</h3>
          <h4 className="title">Frontend Developer</h4>
          <a href="/" className="web-link">
            daveamegs.tech
          </a>
          <form className="form">
            <button className="btn-email">Email</button>
            <button className="btn-in">Linkedin</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Info;
