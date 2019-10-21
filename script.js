import React from 'react';
import ReactDOM from 'react-dom';
import DraftEditor from './editors/draft';
import InputEditor from './editors/input';

function App() {
  return (
    <div>
      <div>Draft.JS:<DraftEditor /></div>
      <div>Input Fields:<InputEditor /></div>
    </div>
  );
}

ReactDOM.render(<App />,document.getElementById('root'));