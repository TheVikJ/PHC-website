import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import './stylesheets/Common.scss';
import {discordInvite} from './data/Constants.json';

function App() {
	return (
	  <Layout>
      <Switch>
        <Route exact path='/' component={Home}/>
	      <Route exact path='/about' component={About}/>
	      <Route exact path='/discord' render={() => window.location = discordInvite}/>
      </Switch>
    </Layout>
	);
}

export default App;
