import { Route, Switch } from 'react-router-dom'

import './App.css'

function App() {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/countries" component={Countries}/>
      <Route path="/leagues/:country" component={Leagues}/>
      <Route path="/teams/:id" component={Teams}/>
      <Route path="/players/:id" component={Players}/>
    </Switch>
  )
}

export default App
