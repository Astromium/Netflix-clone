import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import Nav from "../Nav";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <Nav />
      <div className="profile__body">
        <h1>Edit Profile</h1>
        <div className="profile__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <div className="profile__details">
            <h2>{user.email}</h2>
            <div className="profile__plans">
              <h3>Plans (Current Plan: premium)</h3>
              <p>Renewal date : 04/03/2021</p>
              <div className="profile__plan">
                <div className="plan__info">
                  <h4>Netflix Standard</h4>
                  <p>1080p</p>
                </div>
                <button className="plan__button">Subscribe</button>
              </div>

              <div className="profile__plan">
                <div className="plan__info">
                  <h4>Netflix Basic</h4>
                  <p>480p</p>
                </div>
                <button className="plan__button">Subscribe</button>
              </div>

              <div className="profile__plan">
                <div className="plan__info">
                  <h4>Netflix Premium</h4>
                  <p>1080p</p>
                </div>
                <button className="plan__button plan__button--current">
                  Current Package
                </button>
              </div>
              <button
                onClick={() => auth.signOut()}
                className="profile__signout"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
