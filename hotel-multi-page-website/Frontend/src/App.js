import "./App.css"
import Navbar from "./Common/Navbar/Navbar"
import Home from "./Components/Pages/Home"
import { BrowserRouter as Router, Switch,Route,} from "react-router-dom"
import About from "./Components/About/About"
import Gallery from "./Components/Gallery/Gallery"
import Destinations from "./Components/Destinations/Home"

import SinglePage from "./SinglePage/SinglePage"

function App(){
  return(
    <>
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component = {Home}></Route>
      <Route path='/about' exact component = {About}></Route>
      <Route path='/gallery' exact component = {Gallery}></Route>
      <Route path='/destinations' exact component = {Destinations}></Route>
      <Route path='/singlepage/:id' exact component = {SinglePage}></Route>

    </Switch>
    </Router>
    </>
  )
}
export default App