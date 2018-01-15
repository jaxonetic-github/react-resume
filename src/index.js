import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Resume from './resume.js';
import registerServiceWorker from './registerServiceWorker';
//adding the elements and data
import {educationTestData, technologyTestData, workHistoryTestData, contactTestData} from './util.js'


ReactDOM.render(<Resume educationHistory={educationTestData()} workHistory={workHistoryTestData()} technology={technologyTestData()}  contactInfo={contactTestData()}/>, document.getElementById('root'));

