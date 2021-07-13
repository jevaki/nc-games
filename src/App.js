import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Categories from './components/Categories';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/categories/:slug">
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
