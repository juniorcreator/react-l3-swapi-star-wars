import React from "react";
import User from "./components/User/User";
import ErrorRequest from "./components/ErrorRequest/ErrorRequest";
import Loader from "./components/Loader/Loader";
import { getUsers } from "./service/api";
import "./App.scss";

class App extends React.Component {
  state = {
    isLoading: true,
    errorRequest: false,
    users: null
  };
  componentDidMount() {
    getUsers()
      .then(users => {
        this.setState({ users, isLoading: false });
        console.log(this.state);
      })
      .catch(() => {
        this.setState({ errorRequest: true });
      });
  }
  renderUsers = () => {
    let { users } = this.state;
    if (users) {
      return users.map((user, index) => {
        return <User key={index} user={user} />;
      });
    }
  };
  handleCloseErrorRequest = () => {
    this.setState({ errorRequest: false });
  };
  render() {
    const { isLoading, errorRequest, users } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          {errorRequest && (
            <ErrorRequest
              handleCloseErrorRequest={this.handleCloseErrorRequest}
            />
          )}
          {isLoading ? <Loader /> : this.renderUsers()}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
