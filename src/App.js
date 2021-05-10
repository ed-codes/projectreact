import React, {useState} from 'react';
import './App.css';
import Job from './components/job';
import Searchbar from './components/search'


function App() {
  return (
    <div className="App">
      <Searchbar /> 
      <Job title="Interaction designer (UI/UX)" location="Sweden"/>
      <Job title="React Front-end Developer" location="USA"/>
      <Job title="Node Express Backend Developer" location="UK"/>
    </div>
  )
}

export default App;