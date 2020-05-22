import React from "react";

function About() {
  return (
    <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                    <div className = "card-body">
                        <h2 className="card-title">Brandon Kim</h2>
                    </div>
                <div className="row p-3">
                  <div className="col-sm-8">
                    <img src = "./assets/imgs/BrandonKim.png" alt="Profile Pic" />
                    <h3>About Me</h3>
                    <p>Graduated from Georgia Tech in December 2019 with a Bachelor of Science in Biomedical Engineering. 
                        Planning to enroll in graduate school at Georgia Tech's MS-HCI (Masters in Human-Computer Interaction) program in August 2020.
                        I am a biological science enthusiast who firmly believes that curiosity and communication are the two biggest contributors to societal development and evolution. 
                        Invested in biomolecular sciences, UI/UX design, and writing.</p>
                    <p>I am currently enrolled in a professional coding bootcamp at Georgia Tech, where I am working on projects like this very website. </p>
                    </div>
                    <div className="col-sm-4">
                    <h4>My Current Work:</h4>
                    <img className="social-media" src="./assets/imgs/github.png" alt="GitHub" />
                    <a href="https://github.com/bkim377">GitHub</a>
                    <p></p>
                    <img className="social-media" src="./assets/imgs/linkedin.png" alt="LinkedIn" />
                    <a href="https://www.linkedin.com/in/brandongkim/">LinkedIn</a>
                    <p></p>
                    <img className="social-media" src="./assets/imgs/resume.png" alt="Resume" />
                    <a href="https://drive.google.com/open?id=1al1y7Y_mezcPjcaxnSP56YcNSw9KCOOh">My Resume</a>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </div>
  );
}

export default About;
