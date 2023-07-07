import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { CREATE_PROJECT } from '../utils/mutations';
import { GET_PROJECTS, GET_USER } from '../utils/queries';

import Auth from '../utils/auth';

const ProjectForm = () => {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const [addProject, { error }] = useMutation(CREATE_PROJECT, {
    update(cache, { data: { addProject } }) {
      try {
        const { projects } = cache.readQuery({ query: GET_PROJECTS });

        cache.writeQuery({
          query: GET_PROJECTS,
          data: { projects: [addProject, ...projects] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: GET_USER });
      cache.writeQuery({
        query: GET_USER,
        data: { me: { ...me, projects: [...me.projects, addProject] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addProject({
        variables: {
          projectTitle,
          username: Auth.getProfile().data.username,
          projectDescription
        },
      });

      setProjectTitle('');
      setProjectDescription('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'projectTitle' && value.length <= 280) {
      setProjectTitle(value);
    } else if (name === 'projectDescription') {
        setProjectDescription(value);
    }
  };

  return (
    <div>
      <h3>Fueling Code, Funding Ideas</h3>

      {Auth.loggedIn() ? (
        <>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="projectTitle"
                placeholder="Enter New Project Title..."
                value={projectTitle}
                className="form-input w-100"
                style={{ lineHeight: '1.0', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-9">
              <textarea
                name="projectDescription"
                placeholder="Enter Description of Project..."
                value={projectDescription}
                className="form-input w-100"
                style={{ lineHeight: '2.0', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Add Project
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your projects. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ProjectForm;
