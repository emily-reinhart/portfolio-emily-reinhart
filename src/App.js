import React from 'react';
import { Fragment } from 'react';

import Main from './components/Main';
import Resume from './components/Resume';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';


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
