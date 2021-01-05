import './styles/App.css'
import { Switch, Route } from 'react-router-dom'
import Landing from './components/Landing'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <div className='App'>
    <Switch>
      <Route exact path='/login'/>
      <Route exact path='/signup'/>
      <Route exact path='/' component={Landing}/>
      <Route path ='/' component={PageNotFound}/>
    </Switch>
    </div>
  )
}

export default App
