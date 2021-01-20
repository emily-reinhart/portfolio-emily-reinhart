import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
	return (
		<nav className="navbar">
			<ul className="nav-links">
				<li className="nav-link">
					<HashLink to="../#contact">Contact</HashLink>
				</li>
				<li className="nav-link">
					<HashLink to="../#skills">Skills</HashLink>
				</li>
				<li className="nav-link">
					<HashLink to="../#projects">Projects</HashLink>
				</li>
				<li className="nav-link">
					<HashLink to="../#home">Home</HashLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
