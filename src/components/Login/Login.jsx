import Form from "../Form/Form";
import Styles from "./Login.module.css"
import Image from "../../assets/Login.jpg"
import Header from "../Header/Header";

function Login() {
  return (
    <>
      <Header />
      <div className={Styles.container}>
        <img src={Image} alt="Login Image" className={Styles.image} />
        <div className={Styles.loginContainer}>
          <h1>Login</h1>
          <form className={Styles.form}>
            <Form label="Username " name="name" type="text" />
            <Form label="Password " name="pass" type="password" />
            <div className={Styles.buttons}>
              <button type="submit" className={Styles.button}>Log in</button>
              <button type="reset" className={Styles.button}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;
