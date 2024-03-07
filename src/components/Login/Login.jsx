import Form from "../Form/Form";
import Styles from "../Login/Login.module.css"
function Login() {
  return (
    <>
    <div className = {Styles.loginContainer}>
      <div className={Styles.formContainer}>
      <h1>Login</h1>
        <form className={Styles.form}>
          <Form label="Username " name="name" type="text" />
          <Form label="Password " name="pass" type="password" />
          <div className={Styles.buttons}>
              <button type="submit">Log in</button>
              <button type="reset">Reset</button>
          </div>
          
        </form>

      </div>
    </div>
    
      
    </>
  )
}

export default Login;
