import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./components/Layout";
import About from "./pages/About";
import './stylesheets/Common.scss';
import ExternalRoutes from "./components/External/EnternalRoutes";

function App() {
	return (
		<Layout>
			<Switch>
				<Route exact path='/' component={Home}/>
				<Route exact path='/about' component={About}/>
				<ExternalRoutes/>
			</Switch>
		</Layout>
	);
}

export default App;
