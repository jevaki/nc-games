import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Switch>
        <Route>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
