import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
      {props.courseName}
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part} {props.exercises}
    </div>)
}

const Content = ({ parts }) => {
return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
      <Part part={parts[3].name} exercises={parts[3].exercises} />
    </div>
  )
}
const sumNbOfExercises = (parts) => { 
 return parts[0].exercises + parts[1].exercises + parts[2].exercises + parts [3].exercises;
  }
const Total = ({parts}) => {
    return (
      <div>
        <p>total of exercises {sumNbOfExercises(parts)}</p>
      </div>
    )
  }


const course = {
  name:'Half Stack application development',
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
    },
    {
    name: 'Redux',
    exercises: 11,
    id: 4
    }

  ]
}


const App = (props) => {
  const { course } = props
  return (
    <div>
      <h1>
        <Header courseName={course.name} />
      </h1>
      <p>
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </p>
    </div>
  )

}


ReactDOM.render(
  <App course={course} />,
  document.getElementById('root')
)
