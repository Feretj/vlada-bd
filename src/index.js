import React from "react";
import ReactDOM from "react-dom";

import startBallGame from "./ballGame.js";

const Problem = ({ children, header }) => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column"
    }}
  >
    <div style={{ fontSize: 20 }}>{header}</div>
    <br />
    <div>{children}</div>
  </div>
);

const FirstProblem = () => (
  <Problem header="1. Caesar 12">
    <div>
      Расшивруй это сообщение, оно содержит пароль для следующей страницы:
      <br />
      Bmeeiadp rad ftq zqjf bmsq ue RudefFdk
    </div>
  </Problem>
);

class SecondProblem extends React.Component {
  state = { win: false };
  componentDidMount() {
    this.start();
  }
  start = () =>
    startBallGame(
      this.canvas,
      () => this.setState({ win: true }),
      () => this.start()
    );
  render() {
    return (
      <Problem header={"2. Ball game"}>
        <div>
          {this.state.win ? (
            "Ты выграла! Следующий пароль Game0ver"
          ) : (
            <div style={{ backgroundColor: "black", padding: 1 }}>
              <canvas
                width="480"
                height="320"
                ref={ref => {
                  this.canvas = ref;
                }}
              />
            </div>
          )}
        </div>
      </Problem>
    );
  }
}

const Tip = () => (
  <Problem header="Подсказка">
    Открой консоль разработчика, в хроме ctrl-shift-J
  </Problem>
);

const Tips = () => (
  <Problem header="Подсказки, хей, многое ты хочешь)">
    <ul>
      <li>Поешь хорошо</li>
      <li>Почитай Платона</li>
      <li>Начти определять, какие эмоции ты ощущаешь</li>
      <li>Переодически занимайся физическими упражнениями</li>
      <li>
        А на счет этого сайта, гуглинг названий может помочь) Можно еще спросить
        у Сережи
      </li>
      <li>
        А вообще, я ленивый и особо свой код не скрывал, вся страница на js, ты
        легко можешь ее взломать, получить доступ ко всему, посмотрев код))
      </li>
    </ul>
  </Problem>
);

const screens = {
  happybirthday: "Привет",
  vlada: null,
  sergey: "wtf",
  "yeah, hack me ;)": <FirstProblem />,
  firsttry: <SecondProblem />,
  game0ver: <div />,
  tip: <Tip />,
  tips: <Tips />
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
    if (screens[this.state.secret.toLowerCase()]) {
      const component = screens[this.state.secret.toLowerCase()];
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
