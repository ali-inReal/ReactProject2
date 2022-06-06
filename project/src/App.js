
import { useState } from "react";
import Login from "./Login";
export default function App() {
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  function mailSetter(event) {
    setMail(event.target.value);
  }

  function passSetter(event) {
    setPass(event.target.value);
    console.log(pass);
  }

  return (
    <div className="App">
      <Login mail={mailSetter} pass={passSetter} email={mail} password={pass} />
    </div>
  );
}
