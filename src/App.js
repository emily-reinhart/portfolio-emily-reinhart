import React from 'react';
import { Fragment } from 'react';
import Nav from './components/Nav';

import Main from './components/Main';
import Resume from './components/Resume';
import { Switch, Route, } from 'react-router'

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
