import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HomePage from './Views/HomePage';
import Article from './Views/Article';
import TagsPage from './Views/Tags';


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route  path="/Article">
            <Article/>
          </Route>
          <Route  path="/Tags">
            <TagsPage/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
