import React from "react";
import ReactDOM from "react-dom";
import AceEditor from "react-ace";
import { isEqual } from "lodash";

import "brace/mode/javascript";
import "brace/theme/solarized_dark";
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
  <Problem header="1. Caesar 13">
    <div>
      Расшифруй это сообщение, оно содержит пароль для следующей страницы:
      <br />
      Cnffjbeq sbe gur arkg cntr vf SvefgGel
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
            "Ты выиграла! Следующий пароль Game0ver"
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

const ThirdProblem = () => (
  <Problem header="3. Do you know how to use internet?">
    <div>
      Next password is just answer for this question:
      <br />
      For what kind of car was the first unlocked iPhone traded?
    </div>
  </Problem>
);

class FourthProblem extends React.Component {
  state = {
    code:
      "// Here you can write your own functions here\n\nfunction vladaSort(array) { // Don't change\nlet newArray = array; // You can change it)\n// ... your code\n\nreturn newArray;\n}\nans = vladaSort(array); // Don't change",
    done: false,
    wrong: false,
    cheat: false
  };
  check = () => {
    const { code } = this.state;
    if (
      code.indexOf(".sort(") !== -1 ||
      code.indexOf("alert(") !== -1 ||
      code.indexOf("log(") !== -1
    ) {
      this.setState({ cheat: true, wrong: false });
      return;
    }
    const array = [
      1,
      8,
      6,
      53,
      34,
      5,
      2,
      2,
      456,
      77,
      343,
      23,
      56,
      75,
      43,
      2,
      1,
      242,
      53,
      4353,
      23,
      23325,
      5333,
      332
    ];
    const sortedArray = [...array].sort();
    let ans;
    eval(this.state.code);
    if (isEqual(ans, sortedArray)) {
      this.setState({ done: true, wrong: false, cheat: false });
    } else {
      this.setState({ wrong: true, cheat: false });
    }
  };
  render() {
    return (
      <Problem header="4. Напиши функцию сортировки чисел)))">
        {this.state.done ? (
          "Еееее, молодец! Следующий пароль ImProgger"
        ) : (
          <div>
            <div
              style={{
                backgroundColor: "red",
                color: "white",
                paddingLeft: 10
              }}
            >
              {this.state.cheat &&
                "Не не не, функции sort, log и alert запрещены"}
              {this.state.wrong && "Массив неверно отсортирован"}
            </div>
            <AceEditor
              width="700px"
              mode="javascript"
              theme="solarized_dark"
              onChange={code => this.setState({ code })}
              value={this.state.code}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
            />
            <button
              style={{
                backgroundColor: "#2ce63e",
                color: "white",
                width: "700px",
                height: "40px",
                fontSize: 20,
                borderWidth: 0,
                marginTop: 1
              }}
              onClick={this.check}
            >
              Check
            </button>
          </div>
        )}
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
  <Problem header="Подсказки, хей, многого ты хочешь)">
    <ul>
      <li>Поешь хорошо</li>
      <li>Почитай Платона</li>
      <li>Начни определять, какие эмоции ты ощущаешь</li>
      <li>Периодически занимайся физическими упражнениями</li>
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

const Masha = () => (
  <Problem>
    <div style={{ width: 400 }}>
      Надеюсь, что тебе было сложно пройти все это(потому что мне было сложно, а
      я же умная c;). Расти большой, расти не вредной, оставайся милым
      человеком, верь в себя и пусть тебя окружают люди, которые тоже в тебя
      верят, любят и ценят! {"<"}3 ❤ <br /> <br />
      - Маша Воробьева
    </div>
  </Problem>
);

const screens = {
  happybirthday: "Привет",
  vlada: null,
  sergey: "wtf",
  "yeah, hack me ;)": <FirstProblem />,
  firsttry: <SecondProblem />,
  game0ver: <ThirdProblem />,
  "nissan 350z": <FourthProblem />,
  tip: <Tip />,
  hint: <Tip />,
  hints: <Tips />,
  tips: <Tips />,
  masha: <Masha />,
  maria: <Masha />
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
