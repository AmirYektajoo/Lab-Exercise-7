import { useState } from 'react'

import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState({
    title: 'Welcome to Fullstack Development - I',
    exercise_title: 'React JS Programming Week09 Lab exercise',
    student_id: '101367389',
    name: 'Amir Yektajoo',
    end_text: 'George Brown College, Toronto'
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='App-title'>
          {data.title}
        </p>
        <p className='App-exercise-title'>
          {data.exercise_title}
        </p>
        <p className='App-student-id'>
          {data.student_id}
        </p>
        <p className='App-student-name'>
          {data.name}
        </p>
        <p className='App-student-endtext'>
          {data.end_text}
        </p>
      </header>
    </div>
  );
}

export default App;
