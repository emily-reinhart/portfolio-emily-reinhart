import React, { Fragment } from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App () {
	return (
		<Fragment>
			<Nav />
			<Header />
			<Projects />
			<Skills />
			<Footer />
		</Fragment>
	);
}

export default App;
