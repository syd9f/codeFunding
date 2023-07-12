// import React from 'react';
// import { useQuery } from '@apollo/client';

// import ProjectList from '../components/ProjectList';
// // import ProjectForm from '../components/ProjectForm';

// import { GET_PROJECTS } from '../utils/queries';

// const Home = () => {
//   const { loading, data } = useQuery(GET_PROJECTS);
//   const projects = data?.projects || [];

//   console.log('loading:', loading);
//   console.log('projects:', projects);

//   return (
//     <main>
//       <div className="flex-row justify-center">
        
//         <div className="col-12 col-md-8 mb-3">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <ProjectList
//               projects={ProjectList}
//               // projectTitle="Project feed"
//             />
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Home;

import React from 'react';
import { useQuery } from '@apollo/client';

import ProjectList from '../components/ProjectList';
import { GET_PROJECTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(GET_PROJECTS);
  const projects = data?.projects || [];

  console.log('loading:', loading);
  console.log('projects:', projects);

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Find a project to fund!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <ProjectList projects={projects} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
