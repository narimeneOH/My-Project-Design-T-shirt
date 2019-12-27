import React, { Component } from 'react';
import Dashbord from './components/dashbord/Dashbord';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Project from './components/project/Project';
import Footer from './components/navbar/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Dashbord />
          <Project />
          <Footer />
        </div>
      </Router>
    );
  }
}





export default App;
