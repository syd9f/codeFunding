import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Login from './pages/Login';
import Projects from './pages/Projects';
import Signup from './pages/Signup';
import User from './pages/User';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Routes>
            <Route 
              path="/" 
              element={<Login />}
            />
            <Route 
              path="/matchup" 
              element={<Projects />}
            />
            <Route 
              path="/matchup/:id" 
              element={<Signup />}
            />
            <Route 
              path="*"
              element={<User />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
