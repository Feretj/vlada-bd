import React from "react";
import ReactDOM from "react-dom";

const screens = {
  happybirthday: "Привет",
  vlada: null,
  sergey: "wtf",
  "yeah, hack me ;)": "Oohhhhhh yeee"
};

class BirthdayApp extends React.Component {
  state = { secret: "" };
  onSecretChange = event => this.setState({ secret: event.target.value });
  componentWillMount = () => {
    window.Start_Vlada_hacking = () => {
      this.setState({ secret: "yeah, hack me ;)" });
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
      secret: this.state.secret,
      onSecretChange: this.onSecretChange,
      inputRef: ref => {
        this.pwdInput = ref;
      }
    };

    let mainComponent = <Secret {...props} />;
    if (screens[this.state.secret]) {
      const component = screens[this.state.secret];
      mainComponent = (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <SecretHeader {...props} />
          {component}
        </div>
      );
    }
    return mainComponent;
  }
}

const Secret = ({ secret, onSecretChange, inputRef }) => (
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
        value={secret}
        onChange={onSecretChange}
        ref={inputRef}
        onFocus={e => {
          const tmp = e.target.value;
          e.target.value = "";
          e.target.value = tmp;
        }}
      />
    </div>
  </div>
);

const SecretHeader = ({ secret, onSecretChange, inputRef }) => (
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
        value={secret}
        onChange={onSecretChange}
        ref={inputRef}
        onFocus={e => {
          const tmp = e.target.value;
          e.target.value = "";
          e.target.value = tmp;
        }}
      />
    </div>
  </div>
);

console.log("Hello, if you are Vlade use window.Start_Vlada_hacking()");

ReactDOM.render(<BirthdayApp />, document.getElementById("root"));
