import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import './Projects.css';

const Projects = () => {

    useEffect(() => {
        const typingElements = document.querySelectorAll('.allergeat-subtitle, .carbcons-subtitle, .portfolio-subtitle');
        const typingSpeed = 50;
        const repeatInterval = 6000;

        function typeText(el, text, callback) {
            el.textContent = '';
            let index = 0;
            const cursor = el.nextElementSibling;

            function type() {
                if (index < text.length) {
                    el.textContent += text.charAt(index);
                    index++;
                    cursor.style.left = `${el.offsetWidth}px`;
                    setTimeout(type, typingSpeed);
                } else {
                    cursor.style.left = `${el.offsetWidth}px`;
                    if (callback) {
                        setTimeout(callback, 500);
                    }
                }
            }

            type();
        }

        function clearText(el, callback) {
            el.textContent = '';
            const cursor = el.nextElementSibling;
            cursor.style.left = '100%';
            if (callback) {
                setTimeout(callback, 500);
            }
        }

        function startTyping() {
            typingElements.forEach(el => {
                const text = el.getAttribute('data-text') || el.textContent;
                clearText(el, () => typeText(el, text));
            });
        }

        typingElements.forEach(el => {
            el.setAttribute('data-text', el.textContent);
        });

        startTyping();
        const typingInterval = setInterval(startTyping, repeatInterval);

        return () => clearInterval(typingInterval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="projects-page">
            <div className="top-buttons">
                <Link to="/" className="top-button home">Home</Link>
                <Link to="/projects" className="top-button projects">Projects</Link>
                <Link to="/about" className="top-button about">About</Link>
            </div>

            <h1>Explore My Work</h1>
            {/* <div className="highlight-box"></div> */}

            <div className="JUMP-SIM-container">
                <img src="images/JUMP_SIM.jpg" alt="JUMP-SIM UI" className="JUMP-SIM" />
                <p className="JUMP-SIM-title">
                    <span className="red-highlight">Jump Simulation Internship</span> <br />
                    <span className="JUMP-SIM-subtitle" data-text=" A virtual, interactive AI patient in an XR simulation">A virtual, interactive AI patient in an XR simulation</span>
                    <span className="cursor">|</span> <br />
                    <br />
                    <span className="JUMP-SIM-text">Unity, C#, Python, Meta Quest, AWS Lambda, and more</span> <br />
                    <Link className="project-button" to="/development">Demo</Link>
                </p>
            </div>

            <div className="carbcons-container">
                <p className="carbcons-title">
                    <span className="red-highlight">Carbon Conscious</span> <br />
                    <span className="carbcons-subtitle" data-text=" An app to track your carbon footprint">An app to track your carbon footprint</span>
                    <span className="cursor">|</span> <br />
                    <br />
                    <span className="carbcons-text">MySQL, GCP, Express.js, and more</span> <br />
                    <button className="project-button" onClick={() => window.open('https://github.com/praneethabhogi/RecipeRecommender', '_blank')}>Github</button>
                    <Link className="project-button" to="/development">Dev Process</Link>
                </p>
                <img src="images/carbcons_figma.png" alt="carbcons UI" className="carbcons" />
            </div>

            <div className="dinnerparty-container">
                <img src="images/dinnerparty_figma.png" alt="dinnerparty UI" className="dinnerparty" />
                <p className="dinnerparty-title">
                    <span className="red-highlight">Dinner Party</span> <br />
                    <span className="dinnerparty-subtitle" data-text=" An app to track your carbon footprint">A Tinder-style restaurant finding mobile app</span>
                    <span className="cursor">|</span> <br />
                    <br />
                    <span className="dinnerparty-text">React Native/Expo, TypeScript, Android Studio, and more</span> <br />
                    <button className="project-button" onClick={() => window.open('https://github.com/CS465UIDesign/AD3_4', '_blank')}>Github</button>
                    <Link className="project-button" to="/development">Dev Process</Link>
                </p>
            </div>

            <div className="portfolio-container">
                <p className="portfolio-title">
                    <span className="red-highlight">My Portfolio</span> <br />
                    <span className="portfolio-subtitle" data-text=" A showcase of my skills">A showcase of my skills</span>
                    <span className="cursor">|</span> <br />
                    <br />
                    <span className="portfolio-text">HTML/CSS, JavaScript, Three.JS, and more</span> <br />
                    <button className="project-button" onClick={() => window.open('https://github.com/praneethabhogi/praneethabhogi.github.io', '_blank')}>Github</button>
                    <Link className="project-button" to="/development">Dev Process</Link>
                </p>
                <img src="images/portfolio_figma.png" alt="portfolio UI" className="portfolio" />
            </div>

            <div className="allergeat-container">
                <img src="images/allergeat_figma.png" alt="allergeat UI" className="allergeat" />
                <p className="allergeat-title">
                    <span className="red-highlight">Allerg-Eat</span> <br />
                    <span className="allergeat-subtitle" data-text=" An app to manage food allergies">An app to manage food allergies</span>
                    <span className="cursor">|</span> <br />
                    <br />
                    <span className="allergeat-text">Python, Pytorch, NLTK, and more</span> <br />
                    <button className="project-button" onClick={() => window.open('https://github.com/praneethabhogi/RecipeRecommender', '_blank')}>Github</button>
                    <Link className="project-button" to="/development">Dev Process</Link>
                </p>
            </div>
        </div>
    );
}

export default Projects;
