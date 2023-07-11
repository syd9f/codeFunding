import React from 'react';
import { Link } from 'react-router-dom';
import { GET_PROJECTS } from '../utils/queries';
import { useQuery } from '@apollo/client';
import Auth from '../utils/auth';


// {
//   projects,
//   projectTitle,
//   showTitle = true,
//   showUsername = true,
// }
const ProjectList = () => {
  const showProjects = useQuery(GET_PROJECTS);
  console.log(showProjects);
  if (!showProjects.data.projects.length) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h3> No Projects to Show </h3>
      </div>
    );
  }


  return (
    <div>
      {<h3>{showProjects.projectTitle}</h3>}
      {showProjects &&
        showProjects.map((project) => (
          <div key={showProjects._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              { (
                <Link
                  className="text-light"
                  to={`/profiles/${project.username}`}
                >
                  {project.username} <br />
                  <span style={{ fontSize: '1rem' }}>
                    posted this project
                  </span>
                </Link>
              )  (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You posted this project
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{project.projectTitle}</p>
            </div>
            <div className="card-body bg-light p-2">
              <p>{project.projectDescription}</p>
            </div>
            <div>
            <input type="number" id="quantity" name="quantity" min="1">
              </input>
              <button>Donate</button>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/projects/${project._id}`}
            >
              Donate to this project!
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ProjectList;
