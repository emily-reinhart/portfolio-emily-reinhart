import React from 'react';
import profileImg from '../imgs/emily-squareTiny.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div id="home" style={{ paddingTop: '1px' }}>
			<header className="intro">
				<div className="intro-grid">
					<h1 className="name">Hi, I am Emily Reinhart</h1>

					<div className="job-title">
						<h2>Front-End Dev</h2>
					</div>
					<div className="buttons">
						{/* <a href="https://drive.google.com/file/d/1PLOIHm0eDe90SjVLWHJ8T1cZLnPSOJgO/view?usp=sharing">
							Resume
						</a> */}
						<button><Link to='/resume'>Resume</Link></button>
						<a href="#projects">My Work</a>
						<a href="#contact">Contact</a>
					</div>

					<div className="profile-img">
						<img src={profileImg} alt="" />
					</div>
				</div>

				<div className="down-arrow">
					<a href="#projects">
						<FontAwesomeIcon icon={faArrowCircleDown} />
					</a>
				</div>
			</header>
		</div>
	);
};

export default Header;
