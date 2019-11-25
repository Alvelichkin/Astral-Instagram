import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


export let rerenderAllTree = function() {
    return (
ReactDOM.render(<App />, document.getElementById('root'))
);
}

rerenderAllTree();