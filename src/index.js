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
  onPasswordChange = event => this.setState({ password: event.target.value });
  componentWillMount = () => {
    window.Start_Vlada_hacking = () => {
      this.setState({ password: "yeah, hack me ;)" });
    };
  };
  componentDidMount = () => {
    this.pwdInput.focus();
  };
  componentDidUpdate = () => {
    this.pwdInput.focus();
  };
  render() {
    const props = {
      password: this.state.password,
      onPasswordChange: this.onPasswordChange,
      inputRef: ref => {
        this.pwdInput = ref;
      }
    };

    let mainComponent = <Password {...props} />;
    if (screens[this.state.password]) {
      const component = screens[this.state.password];
      mainComponent = (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <PasswordHeader {...props} />
          {component}
        </div>
      );
    }
    return mainComponent;
  }
}

const Password = ({ password, onPasswordChange, inputRef }) => (
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
      <input
        placeholder="type password"
        value={password}
        onChange={onPasswordChange}
        ref={inputRef}
        onFocus={e => {
          const tmp = e.target.value;
          e.target.value = "";
          e.target.value = tmp;
        }}
      />
      <input type="button" />
    </div>
  </div>
);

const PasswordHeader = ({ password, onPasswordChange, inputRef }) => (
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
      <input
        placeholder="type password"
        value={password}
        onChange={onPasswordChange}
        ref={inputRef}
        onFocus={e => {
          const tmp = e.target.value;
          e.target.value = "";
          e.target.value = tmp;
        }}
      />
      <input type="button" />
    </div>
  </div>
);

console.log("Hello, if you are Vlade use window.Start_Vlada_hacking()");

ReactDOM.render(<BirthdayApp />, document.getElementById("root"));
