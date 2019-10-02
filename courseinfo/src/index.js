import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <h1>
      {props.name}
    </h1>
  );
}

const Part = (props) => {
  const receivedPart = props.part; 
 return (
    <div>
      {receivedPart.title} {receivedPart.exerciseCount}
    </div>
  )
}

const Content = (props) => {
  const allParts = props.contentsParts;
  console.log("is it shtg in allParts?" + allParts);
  console.log("exercise? " + allParts[0].exerciseCount);
  console.log("exercise? " + allParts[0].title);
  
  return (
    
     <div>
       <Part part={allParts[0]} />
       <Part part={allParts[1]} />
       <Part part={allParts[2]} />
     </div>
   )
 }

const Total = (props) => {
  const allParts = props.parts;
  const exerciseOfPart1 = allParts[0].exerciseCount;
  const exerciseOfPart2 = allParts[0].exerciseCount;
  const exerciseOfPart3 = allParts[0].exerciseCount;
  
  const totalExercises= exerciseOfPart1 + exerciseOfPart2 + exerciseOfPart3;
  
  return (
    <p>
  Total {totalExercises}
    </p>
  )
}

// ---------------Main logic happens ----------------------------
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        title: 'Fundamentals of React',
        exerciseCount: 10
      },
      {
        title: 'Using props to pass data',
        exerciseCount: 7
      },
      {
        title: 'State of a component',
        exerciseCount: 14
      }
    ]
  }


let totalexerciseCount = 0;

return (
  <div>
    <div>
      <Header name={course.name} />
      <Content contentsParts={course.parts} />
      <Total parts={course.parts} />
    </div>
  </div>
)
}

ReactDOM.render(<App />, document.getElementById('root'))