
import PageTeam from "./Pages/PageTeam"
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import MatchPage from "./Pages/MatchPage";

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

        </Switch>
           
      </Router>
     
    </div>
  );
}

export default App;
