import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import Home from './pages/Home';
import Login from './pages/Login';
import Projects from './pages/Home';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
        <Header />
          <div className="container">
          <Routes>
          <Route 
                path="/"
                element={<Home />}
              />
            <Route 
                path="/login" 
                element={<Login />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route 
                path="/me" 
                element={<Profile />}
              />
              <Route 
                path="/profiles/:username" 
                element={<Profile />}
              />
              <Route 
                path="/project/:projectId" 
                element={<Projects />}
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
