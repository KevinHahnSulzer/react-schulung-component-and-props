import * as React from 'react';
import ChildComponent from './Child';
import './style.css';

export default function App(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.task}</p>
      <p>
        <ChildComponent />
      </p>
    </div>
  );
}
