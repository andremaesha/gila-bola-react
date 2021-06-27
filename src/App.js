import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Layout from "./Components/views/Layout";
import Home from "./Pages/Home";
import Pertandingan from "./Pages/Pertandingan";
import Teams from "./Pages/Teams";
import FavoriteTeams from "./Pages/FavoriteTeams";
import DetailTeam from "./Pages/DetailTeam";

function App() {
    return (
        // <ThemeProvider>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/pertandingan">
                        <Pertandingan />
                    </Route>
                    <Route path="/teams">
                        <Teams />
                    </Route>
                    <Route path="/favoriteteams">
                        <FavoriteTeams />
                    </Route>
                    <Route path="/team/detail/:id">
                        <DetailTeam />
                    </Route>
                </Switch>
            </Layout>
        </Router>
        // </ThemeProvider>
    );
}

export default App;
