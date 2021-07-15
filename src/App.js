import './App.css';
import ReactLogo from './components/ReactLogo'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/home.css'

import HomeClass from './components/HomeClass'
import Portfolio from './components/Portfolio'
import Uses from './components/Uses'
import Interests from './components/Interests'
import Projects from './components/Projects'
import MyMaps from './components/MyMaps'



function App() {
  return (

    <div className="App">
      <Router>
        <div>
          <Switch>
          <Route exact path="/home" component = { HomeClass } />
          <Route exact path="/" component = { Portfolio } />
          <Route exact path="/logo" component = { ReactLogo } />
          <Route exact path="/uses" component = { Uses } />
          <Route exact path="/interests" component = { Interests } />
          <Route exact path="/projects" component = { Projects } />
          <Route exact path="/mymaps" component = { MyMaps } />
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}



// const Check= () => (
//   <div className="home-base">
//     <h3> Loading ! </h3>
//   </div>
// )



export default App;
