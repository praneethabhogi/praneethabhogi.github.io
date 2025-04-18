import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Use Link for navigation
import * as THREE from 'three';
import './Homepage.css';

const Homepage = () => {
  useEffect(() => {
    // Initialize the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    renderer.setClearColor(0xF5F4F4);

    // Create particles
    const particles = new THREE.Group();
    for (let i = 0; i < 1500; i++) {
      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshBasicMaterial({ 
        color: 0x4E0C0C,
        wireframe: false,
        transparent: true,
        opacity: 0.35
      });
      const sphere = new THREE.Mesh(geometry, material);

      sphere.position.set(Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50);
      sphere.scale.set(0.17, 0.17, 0.17);

      particles.add(sphere);
    }
    scene.add(particles);

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.001;
      renderer.render(scene, camera);
    }
    camera.position.z = 50;
    animate();

    // Handle resizing
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="homepage">
      <div className="text-container">
        <h1>
          Praneetha&nbsp;Bhogi <br />
          <span style={{ fontSize: '8vw', fontWeight: 300 }}>Computer&nbsp;Science&nbsp;+&nbsp;Philosophy</span>
        </h1>
        <Link className="link" to="/about">About&nbsp;Me</Link>
        <Link className="link" to="/projects">Projects</Link>
        <a className="link" href="/files/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
  
      <div className="dropdown">
        <button className="dropbtn">Contact Me</button>
        <div className="dropdown-content">
          <a href="mailto:bhogipraneetha@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
          <a href="https://github.com/praneethabhogi" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/praneetha-bhogi-1a6193228/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );

};

export default Homepage;
