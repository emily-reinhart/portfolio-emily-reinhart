import React from 'react';
import { Fragment } from 'react';
import Nav from './components/Nav';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Resume from './components/Resume';

function App () {
	return (
		<Fragment>
			<Nav></Nav>
			<Switch>
				<Route exact path="/" component={Main} />
				<Route path="/resume" component={Resume} />
			</Switch>
		</Fragment>
		
	);
}

export default App;
