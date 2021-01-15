import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Detail from "./components/Detail"
import App from "./components/App"
import Navbar from "./components/Navbar"
import Form from "./components/Form"
import Comments from "./components/Comments"

const ReactApp = () =>{
    return(
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/detail/:id" component={Detail} exact/>
            <Route path = "/contact" component={Form} exact />
            <Route path = "/comments" component={Comments} exact />
            <Route path="/" component={App}/>
          </Switch>
      </Router>
    )
}

export default ReactApp;