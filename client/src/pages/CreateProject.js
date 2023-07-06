import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import ProjectList from '../components/ProjectList';
import ProjectForm from '../components/ProjectForm';

import { GET_PROJECT } from '../utils/queries';

const CreateProject = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { projectId } = useParams();

  const { loading, data } = useQuery(GET_PROJECT, {
    // pass URL parameter
    variables: { projectId: projectId },
  });

  const Project = data?.project || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      {/* <h3 className="card-header bg-dark text-light p-2 m-0">
        {Project.thoughtAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this thought on {thought.createdAt}
        </span>
      </h3> */}
      <div className="bg-light py-4">
        <blockquote
          className="p-4"
          style={{
            fontSize: '1.5rem',
            fontStyle: 'italic',
            border: '2px dotted #1a1a1a',
            lineHeight: '1.5',
          }}
        >
          {Project.projectTitle}
        </blockquote>
      </div>

      {/* <div className="my-5">
        <ProjectList comments={thought.comments} />
      </div> */}
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ProjectForm projectId={Project._id} />
      </div>
    </div>
  );
};

export default CreateProject;
