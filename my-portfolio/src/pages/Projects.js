// // src/pages/Projects.js
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Github, ExternalLink } from 'lucide-react';
// import AnimatedSection from '../components/AnimatedSection';
// // import DipakPhoto from '../assets/Dipak.jpg';
// // import DipakResume from '../assets/Dipak_Khadka.pdf';

// // import EcommerceImage from '../assets/ecommerce.png';
// // import TaskManagerImage from '../assets/taskmanager.png';
// // import WeatherAppImage from '../assets/weatherapp.png';

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "E-Commerce Platform",
//       description: "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, payment processing, and inventory management.",
//       image: "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=E-Commerce+Platform",
//       role: "Full-Stack Developer",
//       outcome: "Successfully deployed with 99% uptime and positive user feedback",
//       technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
//       githubLink: "https://github.com",
//       liveLink: "https://example.com"
//     },
//     {
//       id: 2,
//       title: "Task Management App",
//       description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
//       image: "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=Task+Manager",
//       role: "Frontend Developer",
//       outcome: "Increased team productivity by 40% and adopted by multiple departments",
//       technologies: ["React", "Redux", "Socket.io", "Material-UI"],
//       githubLink: "https://github.com",
//       liveLink: "https://example.com"
//     },
//     {
//       id: 3,
//       title: "Weather Dashboard",
//       description: "An interactive weather dashboard that displays real-time weather data with beautiful visualizations and location-based forecasts.",
//       image: "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=Weather+App",
//       role: "Frontend Developer & UI/UX Designer",
//       outcome: "Featured in local tech showcase and gained 1000+ active users",
//       technologies: ["React", "Chart.js", "Weather API", "CSS3"],
//       githubLink: "https://github.com",
//       liveLink: "https://example.com"
//     }
//   ];

//   return (
//     <div className="page projects-page">
//       <div className="container">
//         <AnimatedSection>
//           <h2 className="page-title">My Projects</h2>
//           <p className="page-subtitle">Here are some of the projects I've worked on recently</p>
//         </AnimatedSection>
        
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <AnimatedSection key={project.id} delay={index * 0.2} className="project-card">
//               <motion.div
//                 className="project-card-inner"
//                 whileHover={{ y: -10, scale: 1.02 }}
//                 transition={{ type: "spring", stiffness: 300 }}
//               >
//                 <div className="project-image">
//                   <img src={project.image} alt={project.title} />
//                   <div className="project-overlay">
//                     <div className="project-links">
//                       <motion.a
//                         href={project.githubLink}
//                         className="project-link-btn"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <Github size={20} />
//                       </motion.a>
//                       <motion.a
//                         href={project.liveLink}
//                         className="project-link-btn"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <ExternalLink size={20} />
//                       </motion.a>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="project-content">
//                   <h3>{project.title}</h3>
//                   <p className="project-description">{project.description}</p>
                  
//                   <div className="project-details">
//                     <div className="detail-item">
//                       <strong>Role:</strong> {project.role}
//                     </div>
//                     <div className="detail-item">
//                       <strong>Outcome:</strong> {project.outcome}
//                     </div>
//                   </div>
                  
//                   <div className="project-technologies">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span key={techIndex} className="tech-tag">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;


// src/pages/Projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

// Import images from assets folder
import EcommerceImage from '../assets/ecommerce.jpg';
import TaskManagerImage from '../assets/task.jpg';
import WeatherAppImage from '../assets/weather.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React and Node.js. Features include user authentication, payment processing, and inventory management.",
      image: EcommerceImage, // Use imported image instead of placeholder
      role: "Full-Stack Developer",
      outcome: "Successfully deployed with 99% uptime and positive user feedback",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: TaskManagerImage, // Use imported image instead of placeholder
      role: "Frontend Developer",
      outcome: "Increased team productivity by 40% and adopted by multiple departments",
      technologies: ["React", "Redux", "Socket.io", "Material-UI"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that displays real-time weather data with beautiful visualizations and location-based forecasts.",
      image: WeatherAppImage, // Use imported image instead of placeholder
      role: "Frontend Developer & UI/UX Designer",
      outcome: "Featured in local tech showcase and gained 1000+ active users",
      technologies: ["React", "Chart.js", "Weather API", "CSS3"],
      githubLink: "https://github.com",
      liveLink: "https://example.com"
    }
  ];

  return (
    <div className="page projects-page">
      <div className="container">
        <AnimatedSection>
          <h2 className="page-title">My Projects</h2>
          <p className="page-subtitle">Here are some of the projects I've worked on recently</p>
        </AnimatedSection>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.2} className="project-card">
              <motion.div
                className="project-card-inner"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <motion.a
                        href={project.githubLink}
                        className="project-link-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        className="project-link-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-details">
                    <div className="detail-item">
                      <strong>Role:</strong> {project.role}
                    </div>
                    <div className="detail-item">
                      <strong>Outcome:</strong> {project.outcome}
                    </div>
                  </div>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
