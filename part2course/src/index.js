import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>
      {props.name}
    </h1>
  );
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }


const App = (props) => {
  const { course } = props

return (
  <div>
    <h1>Half Stack application development</h1>
    <ul>
      {course.map(courses => <li>{course.name}</li>)}
    </ul>
  </div>
  )

}




ReactDOM.render(
  <App course={course} />,
  document.getElementById('root')
)}
