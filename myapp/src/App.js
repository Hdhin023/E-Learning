import "./App.css"
import { BrowserRouter as Router, Switch,Route } from "react-router-dom"
import Header from "./components/common/header/Header"
import About from "./components/about/About"
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import Pricing from "./components/pricing/Pricing"
import Team from "./components/team/Team"
import CourseHome from "./components/allcourses/CourseHome"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/contact' component={Contact} />\
          <Route exact path='/about' component={About} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/courses' component={CourseHome} />
        </Switch>
      </Router>
    </>
  )
}

export default App
