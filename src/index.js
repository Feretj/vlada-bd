import React from "react";
import ReactDOM from "react-dom";

class BirthdayApp extends React.Component {
  render() {
    return <Password />;
  }
}

class Password extends React.Component {
  render() {
    return (
      <div style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style={{}}>
          <input placeholder="type password" />{" "}
        </div>
      </div>
    );
  }
}

console.log("Hello, use window.Start_Vlada_hacking()");
window.Start_Vlada_hacking = function() {
  alert("ok")
}

ReactDOM.render(<BirthdayApp />, document.getElementById("root"));
