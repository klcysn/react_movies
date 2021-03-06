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
import EditComment from "./components/EditComment"


const ReactApp = () =>{

    return(
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/detail/:current/:id" component={Detail} exact/>
            <Route path = "/message" component={Form} exact />
            <Route path = "/comments" component={Comments} exact />
            <Route path = "/edit/:id" component={EditComment} exact />
            <Route path="/current/:current" component={App} exact />
            <Route path="/" component={App} />
          </Switch>
      </Router>
    )
}

export default ReactApp;