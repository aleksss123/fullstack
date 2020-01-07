import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

/*
import { Component } from "react";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";

const initialState = {
  firstName: "Oleg",
  secondName: "Pavlov"
};

const ACTION_CHANGE_FIRST_NAME = "ACTION_CHANGE_FIRST_NAME";
const ACTION_CHANGE_SECOND_NAME = "ACTION_CHANGE_SECOND_NAME";

const actionChangeFirstName = {
  type: ACTION_CHANGE_FIRST_NAME,
  payload: null
};

const actionChangeSecondName = {
  type: ACTION_CHANGE_SECOND_NAME,
  payload: null
};

const rootReducer = (state = initialState, action) => {
  return state;
};

const store = createStore(rootReducer);

console.log(store.getState());

class MainComponent extends React.Component<{
  firstName: string;
  secondName: string;
}> {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.props.firstName}
            placeholder="First Name"
          />
        </div>
        <div>
          <input
            type="text"
            value={this.props.secondName}
            placeholder="Second Name"
          />
        </div>
        <div />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    firstName: state.firstName,
    secondName: state.secondName
  };
};

const WrappedMainComponent = connect(mapStateToProps)(MainComponent);

ReactDOM.render(
  <Provider store={store}>
    <WrappedMainComponent />
  </Provider>,
  document.getElementById("root")
);
*/

ReactDOM.render(<App />, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
