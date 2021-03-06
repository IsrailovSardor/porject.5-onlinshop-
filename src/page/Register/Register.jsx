import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firbase-config";
import "./Register.css";
import { Link } from "react-router-dom";
function Register() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    setRegisterEmail("");
    setRegisterPassword("");
  };

  return (
    <div className="login_wrapper">
      <div className="register_container">
        <p className="interesting_title"> Зарегистрироваться</p>
        <input
          placeholder="Email..."
          value={registerEmail}
          onChange={(event) => {
            setRegisterEmail(event.target.value);
          }}
          className="modal_basket_input"
        />
        <br />
        <input
          placeholder="Password..."
          value={registerPassword}
          onChange={(event) => {
            setRegisterPassword(event.target.value);
          }}
          className="modal_basket_input"
        />
        <br />
        <button
          onClick={register}
          className={
            registerPassword && registerEmail
              ? "block_input_btnss"
              : "block_input_btns"
          }
        >
          Зарегистрироваться
        </button>
        <br />
        <Link to="/login" className="login_mode">
          Уже зарегистрированы? Войти
        </Link>
      </div>
    </div>
  );
}

export default Register;
