import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import Login from "./routes/login/Login";
import GetCommands from "./routes/commands/GetCommands";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/random-commands" component={GetCommands} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
