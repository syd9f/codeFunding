import React from 'react';
import { useQuery } from '@apollo/client';

import ProjectList from '../components/ProjectList';
// import ProjectForm from '../components/ProjectForm';

import { GET_PROJECTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(GET_PROJECTS);
  const projects = data?.projects || [];

  return (
    <main>
      <div className="flex-row justify-center">
        
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProjectList
              projects={projects}
              title="Project feed"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
