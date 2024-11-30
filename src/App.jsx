import './App.css'
import Navbar from './components/navBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {

 return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Inicio ecommerce Albert Gonzalez"} />
    </div>
  )
}

export default App
