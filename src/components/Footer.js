import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	return (
		<div id="contact">
			<div className="footer">
				<ul>
					<li>
						<a href="mailto:emily.reinhart@utexas.edu">
							<FontAwesomeIcon icon={faEnvelope} />
							<p>Message Me</p>
						</a>
					</li>
					<li>
						<a href="https://github.com/emily-reinhart">
							<FontAwesomeIcon icon={faGithubSquare} />
							<p>Github</p>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/emily-reinhart/">
							<FontAwesomeIcon icon={faLinkedin} />
							<p>LinkedIn</p>
						</a>
					</li>
				</ul>
				<p>Made by Emily Reinhart 2020</p>
			</div>
		</div>
	);
};

export default Footer;
