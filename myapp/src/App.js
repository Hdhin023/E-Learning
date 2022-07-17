import "./App.css"
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"
import Header from "./components/common/header/Header"
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  )
}

export default App
