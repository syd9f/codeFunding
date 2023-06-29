import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Login from './pages/Login';
import Projects from './pages/Home';
import Signup from './pages/Signup';
import User from './pages/Profile';

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
              path="/login" 
              element={<Login />}
            />
            <Route 
              path="/" 
              element={<Projects />}
            />
            <Route 
              path="/signup" 
              element={<Signup />}
            />
            <Route 
              path="/profiles/:username"
              element={<User />}
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
