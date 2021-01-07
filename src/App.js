//library imports
import { Switch, Route } from 'react-router-dom'

//styles
import './styles/App.scss'

//component imports
import Landing from './components/Landing'
import PageNotFound from './components/PageNotFound'

//App component
function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/login' />
        <Route exact path='/signup' />
        <Route exact path='/' component={Landing} />
        <Route path='/' component={PageNotFound} />
      </Switch>
    </div>
  )
}

//exports
export default App
