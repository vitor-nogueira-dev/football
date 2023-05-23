import { Route, Switch } from 'react-router-dom'

import './App.css'
import Home from './pages/Home/Home'
import Countries from './pages/Countries/Countries'
import Leagues from './pages/Leagues/Leagues'

function App() {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/countries" component={Countries}/>
      <Route path="/leagues/:country" component={Leagues}/>
      {/* <Route path="/teams/:id" component={Teams}/>
      <Route path="/players/:id" component={Players}/> */}
    </Switch>
  )
}

export default App
