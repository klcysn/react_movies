import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Detail from "./components/Detail"
import App from "./components/App"

const ReactApp = () =>{
    return(
        <Router>
          <Switch>
            <Route path="/detail/:id" component={Detail} exact/>
            <Route path="/" component={App}/>
          </Switch>
      </Router>
    )
}

export default ReactApp;