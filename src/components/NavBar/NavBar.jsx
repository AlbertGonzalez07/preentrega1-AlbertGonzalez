import { HiOutlineClipboardDocumentList } from "react-icons/hi2"
import CartWidget from "./CartWidget"
import "./navBar.scss"


const Navbar = () => {

const categoria = ["Calzado","Ropa","Accesorios"]



  return (
    <nav className="navbar">
        <div className="brand">
          <img src="./src/assets/logo.png" alt="logo" />
          <p>Albert Gonzalez </p>
        </div>

        <ul className="categoria">
          {
            categoria.map((categoria) =>{
              return <li>{categoria}</li>
            })
          }
        </ul>

    
      <CartWidget />

    </nav>
  )
}

export default Navbar


