import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SplashScreen from "./splashScreen";
import StarMatch from "./game";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <SplashScreen />
        </Route>
        <Route path="/game">
          <StarMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
