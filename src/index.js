import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Resume from './ResumeComponent/resume.js';
// import registerServiceWorker from './registerServiceWorker';

// adding the elements and data
import {educationTestData, technologyTestData, workHistoryTestData, contactTestData} from './ResumeComponent/resume-data.js'

// Render the Component
//ReactDOM.render(<Resume educationHistory={educationTestData()} workHistory={workHistoryTestData()} technology={technologyTestData()}  contactInfo={contactTestData()}/>, document.getElementById('root'));
ReactDOM.render(<Resume /*workHistory={workHistoryTestData()} technology={technologyTestData()} */
  workHistory={workHistoryTestData()} technology={technologyTestData()} educationHistory={educationTestData()}  contactInfo={contactTestData()}/>, document.getElementById('root'));

