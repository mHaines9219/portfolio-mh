import React from 'react';

export default function resume() {
  return (
    <div className="resume">
      <header className="resume-header">
        <h1>Matthew Haines</h1>
        <p>
          Full Stack Software Engineer | Graphic Designer | Audio Professional
        </p>
        <p>
          (908) 770.9100 | mhaines9219@gmail.com | Los Angeles, CA | Portfolio |
          in/mhaines9219/ | github.com/mHaines9219
        </p>
      </header>

      <section className="resume-skills">
        <h2>Skills</h2>
        <p>
          Languages - JavaScript, HTML, CSS, Python, SQL, Mongo, JSON,
          Typescript, EJS, DTL | Database - PostgreSQL, MongoDB Libraries and
          Frameworks - React (class based and hooks), Express.js, Django,
          Bootstrap, Materialize Other - RESTful Routing, JSON api
        </p>
      </section>
      <section className="resume-projects">
        <h2>Software Development Projects</h2>
        <div>
          <h3>SpaceBook - MERN Stack App</h3>
          <p>
            Prompt: Design and create a social media style app to demonstrate
            proficiency with the MERN stack. Utilized a MERN stack (MongoDB,
            Express, React.js, Node.js) to build a full stack application with
            full CRUD operations hitting all RESTful API calls. Responsibility
            for majority of front end functionality and design. Utilized NASA
            APOD API.
          </p>
        </div>
        <div>
          <h3>Shelter Helper - Express App</h3>
          <p>
            Utilized Express framework to create a RESTful API app with full
            CRUD operations and tested all backend routes during development
            using Postman. Used Mongoose to define schemas for MongoDB
            collections and utilized Google oAuth for User Signup/Login. Custom
            CSS styling of file upload as well as whole site.
          </p>
        </div>
        <div>
          <h3>Tommy The Turtle - HTML5 Game</h3>
          <p>
            Created a browser game with imported graphics and audio. Used HTML
            Canvas to create dynamic experience. Implemented game logic for wins
            and losses.
          </p>
        </div>
      </section>
      <section className="resume-experience">
        <h2>Professional Experience</h2>
        <div>
          <h3>Co Founder, Head of Fabrication - Drip Dome Productions</h3>
          <p>
            Responsible for planning and implementation of carpentry and other
            fabrication tasks. Created 3D Renders of builds in SketchUp to get
            approval from Clients prior to building. Interfaced with celebrity
            clientele in a professional manner. Held live events with talent and
            venue booking experience.
          </p>
        </div>
        <div>
          <h3>Founder, Head Engineer - Kingbird Recording Studio</h3>
          <p>
            Created a luxury client experience for independent as well as
            multi-platinum recording artists. Created all branding related to
            the business as well as ran ad campaigns on Google and Meta reaching
            5-10x ROI. Produced, mixed, and mastered audio for dozens of clients
            in Los Angeles.
          </p>
        </div>
      </section>
      <section className="resume-education">
        <h2>Education</h2>
        <div>
          <h3>GENERAL ASSEMBLY - Software Engineering Immersive</h3>
          <p>
            Full-stack software engineering immersive student in an intensive,
            24-week, 450+ hour program focused on product development
            fundamentals, object-oriented programming, MVC frameworks, data
            modeling, and team collaboration strategies. Developed a portfolio
            of individual and group projects.
          </p>
        </div>
        <div>
          <h3>
            Gettysburg College - Bachelor’s Degree in Political Science, Minor
            in Philosophy
          </h3>
        </div>
        <div>
          <h3>Hofstra University</h3>
        </div>
      </section>
    </div>
  );
}
