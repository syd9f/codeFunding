import React from 'react';
// import { Link } from 'react-router-dom';
import { GET_PROJECTS } from '../utils/queries';
import { useQuery } from '@apollo/client';
// import Auth from '../utils/auth';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NOVloA8Nw7JcHSNIWxJwMHrgyb8Krpa6bD00JFGHgUQzABJH783Q999AA2AqFBy4jetcNenBuSg3Ws5R7vPkbep00kqrfvpZx');

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

  const handleDonateClick = async (projectId, donationAmount) => {
    try {
      const stripe = await stripePromise;

      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ projectId, donationAmount }),
      });
      const { clientSecret } = await response.json();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: {
          },
        },
      });

      if (result.error) {
        console.error(result.error.message);
      } else {
        console.log('Payment succeeded!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="project-list">
      <div className="card-container">
        {projects.map((project) => (
          <div key={project._id} className="card">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {project.projectTitle}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{project.projectDescription}</p>
            </div>
            <div>
              <input type="number" id="quantity" name="quantity" min="1" />
              <button onClick={() => handleDonateClick(project._id, 1000)}>Donate</button>
              <p>{project.donationGoal}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;


