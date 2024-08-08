// // ProjectDetail.tsx
// import React from "react";
// import { ProjectType } from "../../data/projects";

// interface ProjectDetailProps {
//   project: ProjectType;
//   onClose: () => void;
// }

// const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
//   return (
//     <div className="project-detail">
//       <button onClick={onClose}>Close</button>
//       <div className="project-image">
//         <img src={project.image} alt={project.title} />
//       </div>
//       <div className="project-info">
//         <h3>{project.title}</h3>
//         <p>{project.description}</p>
//         <p>{project.period}</p>
//         <p>{project.tech}</p>
//         <div>{project.mywork}</div>
//         <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
//           Project Link
//         </a>
//         <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
//           GitHub Link
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ProjectDetail;
