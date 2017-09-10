import React from "react";
import ReactDOM from "react-dom";

const screens = {
  happybirthday: "Привет",
  vlada: null,
  sergey: "wtf",
  "yeah, hack me ;)": "Oohhhhhh yeee"
};

class BirthdayApp extends React.Component {
  state = { password: "" };
  onPasswordChange = password => this.setState({ password });
  componentWillMount = () => {
    window.Start_Vlada_hacking = () => {
      this.setState({ password: "yeah, hack me ;)" });
    };
  };
  render() {
    const props = {
      password: this.state.password,
      onPasswordChange: this.onPasswordChange
    };

    let mainComponent = <Password {...props} />;
    if (screens[this.state.password]) {
      const component = screens[this.state.password];
      mainComponent = (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex"
          }}
        >
          <PasswordHeader {...props} />
          <component />{" "}
        </div>
      );
    }
    return mainComponent;
  }
}

const Password = ({ password, onPasswordChange }) => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <div>
      <input placeholder="type password" value={password} />
      <input type="button" />
    </div>
  </div>
);

const PasswordHeader = ({ password, onPasswordChange }) => (
  <div
    style={{
      height: "10%",
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}
  >
    Пароль для этой страницы, запомни, чтоб вернуться
    <div>
      <input placeholder="type password" value={password} />
      <input type="button" />
    </div>
  </div>
);

console.log("Hello, if you are Vlade use window.Start_Vlada_hacking()");

ReactDOM.render(<BirthdayApp />, document.getElementById("root"));
