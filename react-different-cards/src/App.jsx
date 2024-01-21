// props = read-only properties that are shared between components. 
//          a parent component can send data to a child component
//          <component key=value/>

// propsTypes = a mechanism that ensures that the passed value
//              is of the correct datatype
//              age: propTypes.number    (checks if the passed value is a number)

// defaultProps = default values for the props in case they are not passed from the parent component.
//                name = "Guest"

import Student from "./Student.jsx"

function App() {

  return (
    // if you are passing a value that is not a string, like age, use curly bracets
    <>
      <Student name="Spongbob" age={30} isStudent = {true}/>
      <Student name="Patrik" age={28} isStudent = {false}/>
      <Student name="Squid" age={50} isStudent = {false}/>
      <Student name = "larry"></Student>
    </>
  )
}



export default App
