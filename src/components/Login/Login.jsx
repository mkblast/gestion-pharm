import Form from "../Form/Form";

function Login() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <Form label="Name" name="name" type="text" />
        <Form label="Password" name="pass" type="password" />
        <button type="submit">Log in</button>
      </form>
    </>
  )
}

export default Login;
