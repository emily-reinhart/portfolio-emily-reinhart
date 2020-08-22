import React from 'react';
import candy from '../imgs/candy-nav-clr-sqr.png';
import cookbook from '../imgs/screencapture-cookbook-home-sq.png';
import pattern from '../imgs/pattern-gallery2-sqr.png';
import movie from '../imgs/screencapture-react-movie.png';
import todo from '../imgs/todo-list-sqr.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const handleClick = (event) => {
	let buttonId = event.target.id;
	let overlay = document.getElementById(buttonId + '-overlay');
	console.log(buttonId, overlay);
	if (overlay.style.opacity === '1') {
		overlay.style.opacity = '0';
		document.getElementById(buttonId).textContent = 'Show More';
	}
	else {
		overlay.style.opacity = '1';
		document.getElementById(buttonId).textContent = 'Show Less';
	}
};

const Projects = () => {
	return (
		<div id="projects" style={{ paddingTop: '19px' }}>
			<div className="projects">
				<div className="section-title">
					<h3>Projects</h3>
				</div>
				<div className="projects-grid">
					<div className="outerProject">
						<div className="project">
							<img src={cookbook} alt="" className="project-img" />
							<div className="overlay" id="cookbook-overlay">
								<div className="text">
									<h4>Cookbook</h4>
									<p>A website built with Node allowing users to save recipes.</p>
									<a href="http://cookbook.digital">
										<FontAwesomeIcon icon={faLink} />
									</a>
									<a href="https://github.com/emily-reinhart/Cookbook.digital">
										<FontAwesomeIcon icon={faCode} />
									</a>
								</div>
							</div>
						</div>
						<div className="showMore">
							<button onClick={handleClick} id="cookbook">
								Show More
							</button>
						</div>
					</div>
					<div className="outerProject">
						<div className="project">
							<img src={movie} alt="" className="project-img" />
							<div className="overlay" id="movie-overlay">
								<div className="text">
									<h4>React Movie Search</h4>
									<p>A React website that pulls from an API to search for movies and tv-shows.</p>
									<a href="https://zealous-goodall-9d44ad.netlify.app/">
										<FontAwesomeIcon icon={faLink} />
									</a>
									<a href="https://github.com/emily-reinhart/ReactMovieDB">
										<FontAwesomeIcon icon={faCode} />
									</a>
								</div>
							</div>
						</div>
						<div className="showMore">
							<button onClick={handleClick} id="movie">
								Show More
							</button>
						</div>
					</div>
					<div className="outerProject">
						<div className="project">
							<img src={todo} alt="" className="project-img" />
							<div className="overlay" id="todo-overlay">
								<div className="text">
									<h4>ToDo List</h4>
									<p>
										A simple Todo list app, add new items and cross them out, or delete when done.
									</p>
									<a href="https://distracted-feynman-caed66.netlify.app/">
										<FontAwesomeIcon icon={faLink} />
									</a>
									<a href="https://github.com/emily-reinhart/todo-list">
										<FontAwesomeIcon icon={faCode} />
									</a>
								</div>
							</div>
						</div>
						<div className="showMore">
							<button onClick={handleClick} id="todo">
								Show More
							</button>
						</div>
					</div>
					<div className="outerProject">
						<div className="project">
							<img src={candy} alt="" className="project-img" />
							<div className="overlay" id="candy-overlay">
								<div className="text">
									<h4>Museum of Candy</h4>
									<p>A responsive grid website utilizing Bootstrap.</p>
									<a href="https://github.com/emily-reinhart/MuseumOfCandy">
										<FontAwesomeIcon icon={faCode} />
									</a>
								</div>
							</div>
						</div>
						<div className="showMore">
							<button onClick={handleClick} id="candy">
								Show More
							</button>
						</div>
					</div>
					<div className="outerProject">
						<div className="project">
							<img src={pattern} alt="" className="project-img" />
							<div className="overlay" id="pattern-overlay">
								<div className="text">
									<h4>Pattern Gallery</h4>
									<p>
										A gallery of images made with Bootstrap and using JavaScript to add likes to
										images.
									</p>
									<a href="https://github.com/emily-reinhart/pattern-gallery">
										<FontAwesomeIcon icon={faCode} />
									</a>
								</div>
							</div>
						</div>
						<div className="showMore">
							<button onClick={handleClick} id="pattern">
								Show More
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
