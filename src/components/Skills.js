import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHtml5,
	faNodeJs,
	faReact,
	faPython,
	faGitAlt,
	faBootstrap,
	faJsSquare,
	faCss3Alt
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
	return (
		<div id="skills" style={{ paddingTop: '65px' }}>
			<div className="skills-section">
				<div className="section-title">
					<h3>Skills</h3>
				</div>
				<div className="skills">
					<div className="skill">
						<FontAwesomeIcon icon={faHtml5} />
						<p>HTML</p>
					</div>
					<div className="skill">
						<FontAwesomeIcon icon={faCss3Alt} />
						<p>CSS</p>
					</div>
					<div className="skill">
						<FontAwesomeIcon icon={faJsSquare} />
						<p>JavaScript</p>
					</div>

					<div className="skill">
						<FontAwesomeIcon icon={faNodeJs} />
						<p>Node.js</p>
					</div>

					<div className="skill">
						<FontAwesomeIcon icon={faReact} />
						<p>React</p>
					</div>
					<div className="skill">
						<FontAwesomeIcon icon={faPython} />
						<p>Python</p>
					</div>

					<div className="skill">
						<FontAwesomeIcon icon={faGitAlt} />
						<p>Git</p>
					</div>
					<div className="skill">
						<FontAwesomeIcon icon={faBootstrap} />
						<p>Bootstrap</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
