

import './App.scss'
import PageTeam from "./Pages/PageTeam"
import MatchPage from "./Pages/MatchPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";


function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
           
             <Route   exact path="/teams/:teamName">
                <PageTeam/>
             </Route>
             <Route  path="/teams/:teamName/matches/:year">
                <MatchPage/>
             </Route>

             <Route  path="/">
                <HomePage/>
             </Route>


        </Switch>
           
      </Router>
     
    </div>
  );
}

export default App;
