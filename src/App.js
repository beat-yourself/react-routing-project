import './App.css';

import Navbar from './components/Navbar'
import About from './components/About'
import Shop from './components/Shop'
import Item from './components/Item'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  const appStyle = {textAlign: "center", margin: 0};

  return (
    <div style={appStyle}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={Item} />
        </Switch>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default App;
