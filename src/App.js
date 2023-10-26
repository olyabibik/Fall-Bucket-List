import { useState } from 'react';
import './App.css';
import FallBucketList from './FallBucketList';
import Slides from './Slides';

function App() {
  return (<div>
    <div className="container" >
    <h1>Fall Bucket List</h1>
    </div>
    <div>
      <FallBucketList />
    </div>
    <div className="container" >
        <p className="heading">Seasonal recepies</p>
    </div>
    <div>
      <Slides />
    </div>
    </div>
  );
}

export default App;
