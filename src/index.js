import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'

//Matrix gets a values prop of pattern1 that is imported from data.js
ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'));
