function Login() {
  return (
    <>
      <h1>Login</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="pass">Password:</label>
        <input type="password" id="pass" />
        <button type="submit"></button>
      </form>
    </>
  )
}

export default Login;
