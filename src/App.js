import React from 'react';
import './App.css';
import AutoComplete from './AutoComplete'

function App() {
  const onChange = (val) => console.log('Input value', val)

  return (
    <div className="App">
      <AutoComplete url='http://jsonplaceholder.typicode.com/posts' onChange={(val)=>onChange(val)}/>
    </div>
  );
}

export default App;
