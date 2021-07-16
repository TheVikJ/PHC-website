import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import './stylesheets/Common.scss';
import NotFound from "./pages/NotFound";

function App() {
	return (
		<Layout>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/about' component={About}/>
				<Route component={NotFound}/>
			</Switch>
		</Layout>
	);
}

export default App;
