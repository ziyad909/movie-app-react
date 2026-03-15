
import './App.css'
import Home from "./pages/home"
import Favorite from './pages/favorites'
import {Routes,Route} from "react-router-dom"
import NavBar from './components/nav'
function App() {
  

  return (
    <div>
       <NavBar></NavBar>
       <main className="main-content">
        <Routes>
          <Route element={<Home/>} path="/"></Route>
          <Route path="/favorites"  element={<Favorite/>}></Route>
        </Routes>
    </main>
    </div>

  )
}

export default App
