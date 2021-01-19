import React, { Fragment } from 'react';
// import Nav from './Nav';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import Footer from './Footer';

function Main () {
	return (
		<Fragment>
			{/* <Nav /> */}
			<Header />
			<Projects />
			<Skills />
			<Footer />
		</Fragment>
	);
}

export default Main;
