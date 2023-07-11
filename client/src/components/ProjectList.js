import React from 'react';
import { Link } from 'react-router-dom';
import { GET_PROJECTS } from '../utils/queries';
// import { useMutation } from '@apollo/client';

const ProjectList = ({
  projects,
  projectTitle,
  showTitle = true,
  showUsername = true,
}) => {
  if (!projects.length) {
    //return <h3>No Projects Yet</h3>;
    //renders the following line in the center rather than the header
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <h3>No Projects Yet</h3>
      </div>
    );
  }

  return (
    <div>
      {<h3>{projectTitle}</h3>}
      {projects &&
        projects.map((project) => (
          <div key={project._id} className="card mb-3">
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
