// import React from 'react';
// import { Link } from 'react-router-dom';
// import { GET_PROJECTS } from '../utils/queries';
// import { useQuery } from '@apollo/client';
// import Auth from '../utils/auth';

// const ProjectList = () => {
//   const { loading, error, data } = useQuery(GET_PROJECTS);
  
//   if (loading) {
//     return <div>Loading...</div>;
//   }
  
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }
  
//   const projects = data.projects;

//   if (!projects.length) {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <h3>No Projects to Show</h3>
//       </div>
//     );
//   }

//   return (
//     <div className= "project-list">
//       <h3>Projects</h3>
//       {projects.map((project) => (
//         <div key={project._id} className="card mb-3">
//           <h4 className="card-header bg-primary text-light p-2 m-0">
//             {Auth.loggedIn() && (
//               <Link
//                 className="text-light"
//                 to={`/profiles/${project.username}`}
//               >
//                 {project.username} <br />
//                 <span style={{ fontSize: '1rem' }}>
//                   posted this project
//                 </span>
//               </Link>
//             )}
//             {!Auth.loggedIn() && (
//               <>
//                 <span style={{ fontSize: '1rem' }}>
//                   You posted this project
//                 </span>
//               </>
//             )}
//           </h4>
//           <div className="card-body bg-light p-2">
//             <p>{project.projectTitle}</p>
//           </div>
//           <div className="card-body bg-light p-2">
//             <p>{project.projectDescription}</p>
//           </div>
//           <div>
//             <input type="number" id="quantity" name="quantity" min="1" />
//             <button>Donate</button>
//           </div>
//           <Link
//             className="btn btn-primary btn-block btn-squared"
//             to={`/projects/${project._id}`}
//           >
//             Donate to this project!
//           </Link>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProjectList;

import React from 'react';
import { Link } from 'react-router-dom';
import { GET_PROJECTS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';

const ProjectList = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const projects = data.projects;

  if (!projects.length) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h3>No Projects to Show</h3>
      </div>
    );
  }

  return (
    <div className="project-list">
      {/* <h3>Projects</h3> */}
      <div className="card-container">
        {projects.map((project) => (
          <div key={project._id} className="card">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {project.projectTitle}
            </h4>
            <div className="card-body bg-light p-2">
              {/* <p>{project.projectTitle}</p> */}
            </div>
            <div className="card-body bg-light p-2">
              <p>{project.projectDescription}</p>
            </div>
            <div>
              {/* <input type="number" id="quantity" name="quantity" min="1" />
              <button>Donate</button> */} 
              <p>{project.donationGoal}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/projects/${project._id}`}
            >
              Click to fund this project!
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;

