import React from 'react';
import '../resume.css';

const Resume = () => {
    return (
        <div className="container">
            <div className="header">
                <h2>Emily Reinhart</h2>
                <p href="mailto:emily.reinhart@utexas.edu">emily.reinhart@utexas.edu</p>
                <p>Austin, Texas</p>
            </div>
            <div className="education">
                <h3>Education</h3>
                <hr/>
                <p style={{float: 'right'}}>May 2019</p>
                <p style={{fontWeight: '700'}}>The University of Texas at Austin</p>
                <p><em>Bachelor of Science, Psychology</em></p>
                <p><em>Minor/Certificate: Elements of Computing (Computer Science)</em></p>
                <ul>
                    <li>GPA: 3.03/4.00</li>
                </ul>
            </div>
            <div className="work">
                <h3>Work Experience</h3>
                <hr/>
                <div>
                    <p style={{float: 'right'}}>Oct 2020 - Current</p>
                    <p style={{fontWeight: '700'}}>Orlando O Spencer I Inc.</p>
                    <p><em>Full-Stack Web Developer Intern</em></p>
                    <ul>
                        <li>Translated designs into code to create front-end applications using Angular</li>
                        <li>Designed color schemes to improve website accessibility and user experience</li>
                        <li>Analyzed existing code to improve usability and resolve bugs</li>
                        <li>Maintained a MongoDB database by utilizing RESTful API methods on a NodeJS server</li>
                        <li>Collaborated with other developers and designers to maintain unity throughout all parts of the development</li>
                    </ul>
                </div>
                <div style={{marginTop: '10px'}}>
                    <p style={{float: 'right'}}>Oct 2019 - Mar 2020</p>
                    <p style={{fontWeight: '700'}}>Walgreens</p>
                    <p><em>Certified Pharmacy Technician</em></p>
                    <ul>
                        <li>Utilized customer service skills to assist patients and provide them with information promptly</li>
                        <li>Accurately counted, filled, and labeled prescriptions utilizing knowledge of medications and correct dosage</li>
                        <li>Supported pharmacist in prescription entry and review</li>
                        <li>Efficiently managed and resolved insurance claim issues to ensure expedient preparation of medications</li>
                    </ul>
                </div>
            </div>
            <div className="resume-projects">
                <h3>Projects</h3>
                <hr/>
                <div>
                    <p style={{float: 'right'}}>2020</p>
                    <p style={{fontWeight: '700'}}>Recipe Book Web App</p>
                    <ul>
                        <li>Created a website for users to save or create their favorite recipes</li>
                        <li>Imported recipes from a URL by web scraping with the Cheerio library</li>
                        <li>Utilized HTML, CSS, and Bootstrap to design the website layout</li>
                        <li>Built backend using Node.JS, Express.JS, and MongoDB while incorporating RESTful architecture</li>
                        <li>Performed CRUD operations to manage database entries for each recipe and its associated tags</li>
                        <li>Implemented authentication with Passport.JS and restricted access to recipes based on user’s ownership</li>
                        <li>Deployed final website using Heroku</li>
                    </ul>
                </div>
                <div style={{marginTop: '10px'}}>
                    <p style={{float: 'right'}}>2020</p>
                    <p style={{fontWeight: '700'}}>Movie Search Web App</p>
                    <ul>
                        <li>Built a React app for users to search for movies and tv shows</li>
                        <li>Fetched data from The Movie Database API, and displayed relevant information based on if the result was for a TV Show, Movie, or Actor</li>
                        <li>Displayed search results using CSS grid and designed a responsive layout with CSS media queries</li>
                        <li>Constructed an image slideshow of trending content from the API</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume;