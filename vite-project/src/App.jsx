import {Routes, Route} from "react-router-dom"
import ItemListContainer from "./Components/ItemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </div>
  )
}

export default App
