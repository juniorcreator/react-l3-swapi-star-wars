import React, { Component } from "react";
import "./User.scss";

class User extends Component {
  render() {
    const { user } = this.props;
    let imgPath = `./img/people/${user.name}.jpg`.replace(/\s/g, "");
    return (
      <div className="card">
        <div className="img-wrap">
          <img className="card-img-top" src={imgPath} alt={user.name} />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <b>Name: </b>
            {user.name}
          </h5>
          <p className="card-text">
            <b>Date of birth:</b> {user.birth_year}
          </p>
          <p className="card-text">
            <b>Iye color:</b> {user.eye_color}
          </p>
          <p className="card-text">
            <b>Gender:</b> {user.gender}
          </p>
          <p className="card-text">
            <b>Height:</b> {user.height}
          </p>
        </div>
      </div>
    );
  }
}

export default User;
