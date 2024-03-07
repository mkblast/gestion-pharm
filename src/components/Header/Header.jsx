import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1>Gestion Pharm</h1>

      <ul>
        <li><Link to={"/admin"} >Admin</Link></li>
      </ul>
    </>
  )
}
