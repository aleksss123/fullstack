import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";

const initialState = {
  firstName: "",
  secondName: ""
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

class MainComponent extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <input type="text" placeholder="First Name" />
        </div>
        <div>
          <input type="text" placeholder="Second Name" />
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
