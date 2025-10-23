import React from "react";
import "./Dashboard.css"
import { Link } from "react-router-dom";

const Dashboard = () => {
    const Navlinks = [
        {
            title:"Home",
            Link: "/Home"
        },
        {
            title:"Skills",
            Link: "/skills"
        },
        {
            title:"Projects",
            Link: "/project"
        },
        {
            title:"Contact",
            Link: "/contact"
        },
    ];

    return (
        <div id="home" className="main--container">
            <div className="Header--section">
                <div className="icon--section">
                    <img src="./icon.jpg" alt="icon"/>
                    <h3>SyNapTik</h3>
                </div>
                <div className="Nav--section">
                    
                    {Navlinks.slice(0,5).map((item, index)=> (
                        <Link key={index} to={item} className="Nav--item">
                            <span>{item.title}</span>
                        </Link>
                    ))}
                </div>
            </div>
            {/* main--content Hero--section*/}
           <div className="main--content">
                <div className="hero--section">
                        <div className="hero--text">
                            <h1>Hi, I'm Japheth Masinde</h1>
                            <p>Full-Stack Developer, AI/ML Proficiency, Founder SyNapTik</p>
                            <h2>Welcome To SyNapTik</h2>
                            <div className="hero--content">
                                <p>Your end-to-end technology partner. From full-stack web development to mobile applications and implementation of AI/ML models for automated
                                    tasks/analysis. We design, build and secure complete digital ecosystem therefore delivering intelligent, integrated and secure
                                    solutions tailored to drive your world forward.
                                </p>
                            </div>
                            <button className="hero--button">
                                view our work
                            </button>
                        </div>
                    <div className="hero--image">
                        <img src="./icon.jpg" alt="image"/>
                    </div>
                </div>

                {/* -----About section----- */}
                <section id="about" className="about">
                    <div className="about--container">
                        <h2 className="about-section-title fade-in">About Me</h2>
                        <div className="about-content">
                            <div className="about-text fade-in">
                                <p>I'M a passionate full-stack developer with 3+ years of experience building web and mobile application. I specialize in creating responsive, user-friendly interfaces and robust backend systems</p>
                                <p>My technical expertise includes React, Django,springboot, JAVA, Python Javascript, Html, CSS, Android Development and AI/ML, I enjoy solving complex problems and continously</p>
                                <p>When I'm not coding, you can find me exploring new frameworks, contributing to open-source projects, or sharing knowledge with the developer community. </p>
                                <a href="#contact" className="btn btn-outline">Get In Touch..</a>
                            </div>
                        </div>
                    </div>

                </section>
                <section id="skills" className="skills">
                    <h2>Skills</h2>
                    <div className="skills--container">
                         <div className="container">
                            <h3>Frontend</h3>
                            <p>React</p>
                            <p>JavaScript</p>
                            <p>HTML5</p>
                            <p>CSS3</p>
                         </div>
                         <div className="container">
                            <h3>Backend</h3>
                            <p>Django</p>
                            <p>Python</p>
                            <p>Node.js</p>
                            <p>REST APIs</p>
                            <p>JAVA</p>
                            <p>SpringBoot</p>
                         </div>
                         <div className="container">
                            <h3>Other Technologies</h3>
                            <p>Android Development</p>
                            <p>AI/ML</p>
                            <p>Git</p>
                            <p>PostgreSQL</p>
                            <p>MYSQL</p>
                         </div>
                    </div>
                </section>
                <section id="project"className="project"  >
                    <div className="project--container">
                        <h2>Projects</h2>
                        <div className="project--sample">
                            <div className="sample">
                                <h4>ATriUM Parlour</h4>
                                <h5>Beauty Parlour Management System</h5>
                                <div className="project--description">
                                    <p>A complete multi-tenant Software as a service plartform for  beauty parlour with booking system, 
                                        ,service page, gallery and reviews for clients feedback. Has E-commerce integration where clients can buy beauty products alongside getting spa service</p>
                                </div>
                                <a href="https://www.atriumparlour.com">click to view</a>
                                <div className="technologies--used">
                                    <h5>Technologies</h5>
                                <p>Built with React frontend,Django backend and PostgresSQL for database</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="contact">
                        <h2>Get In Touch</h2>
                        <div className="contact--details">
                            <p>Have a project in mind or want to collaborate? Feel free to reach out!</p>
                            <p>Email: japhethmasinde3@gmail.com</p>
                            <p>Phone: +254 718-364-879</p>
                            <p>Whatsapp: +254 718-364-879</p>
                            <div className="copyright">
                                &copy; {new Date().getFullYear()} SyNapTik .All Rights Reserved
                            </div>
                        </div>
                    </div>
                </section>
           </div>
            
        </div>
    );
};

export default Dashboard;