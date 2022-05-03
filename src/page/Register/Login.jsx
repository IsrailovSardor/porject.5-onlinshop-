import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firbase-config";
import "./Register.css";
import { Link } from "react-router-dom";
function Login() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
    setLoginPassword("");
    setLoginEmail("");
  };

  return (
    <div className="login_wrapper">
      <div className="register_container">
        <p className="interesting_title"> Логин </p>
        <input
          name="text"
          type="text"
          placeholder="Email..."
          onChange={(event) => {
            setLoginEmail(event.target.value);
          }}
          value={loginEmail}
          className="modal_basket_input"
        />
        <br />
        <input
          name="text"
          type="text"
          placeholder="Password..."
          onChange={(event) => {
            setLoginPassword(event.target.value);
          }}
          value={loginPassword}
          className="modal_basket_input"
        />
        <br />
        <button
          onClick={login}
          className={
            loginPassword && loginEmail
              ? "block_input_btnss"
              : "block_input_btns"
          }
        >
          Войти
        </button>
        <br />
        <Link to="/register" className="login_mode">
          Еще не зарегистрированы ? Регистрация
        </Link>
      </div>
    </div>
  );
}

export default Login;
