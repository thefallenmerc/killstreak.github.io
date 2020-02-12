import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import TeamPage from './pages/TeamPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" render={props => <HomePage />} />
          <Route exact path="/projects" render={props => <ProjectsPage />} />
          <Route exact path="/about" render={props => <AboutPage />} />
          <Route exact path="/skills" render={props => <SkillsPage />} />
          <Route exact path="/team" render={props => <TeamPage />} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}