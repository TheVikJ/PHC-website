import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './components/Layout'
import NotFound from './pages/NotFound'
import { homeRoutes } from './data/Routes'

function App() {
  return (
    <Layout>
      <Switch>
        {homeRoutes.map((route) => (
          <Route
            exact
            key={route.route}
            path={route.route}
            component={route.component}
          />
        ))}
        <Route exact path={'/404'} component={NotFound} />
        <Redirect to={'/404'} />
      </Switch>
    </Layout>
  )
}

export default App
