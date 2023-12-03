import logo from "./logo.png"
import {navbar} from "../../helper/data"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="containerN">
        <img src={logo} alt="logo" />
        <div className="buttons">
            {navbar.map((navbar) => (
                <button key={navbar}>{navbar}</button>
            ))}
        </div>
    </div>
  )
}

export default Navbar