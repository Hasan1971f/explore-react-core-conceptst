import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import Bookstore from './Bookstore'

function App() {
   const actors = ['sakib', 'Raz', 'jasim', 'rubel']
   const books = [
    {id: 1, name: 'Bangla', price: 350 },
    {id: 2, name: 'English', price: 550 },
    {id: 3, name: 'Science', price: 250 },
    {id: 4, name: 'Accounting', price: 750 },
   ]
   
   const singers = [
    { id: 1, name: 'Dr. Mahfujur rahman', age: 65},
    { id: 2, name: 'Eva rahman', age: 35},
    { id: 3, name: 'shovro Dev', age: 58},
    { id: 4, name: 'Pritom', age: 28},
   ]
  return (
    <>
      
      <h1>Vite + React</h1>
      <Bookstore books={books}></Bookstore>
     {
      singers.map(singer => <Singer singer={singer}></Singer>)
     }
     <Actor name="Bappa Chodwury"></Actor>
     
    {
      actors.map(actor => <Actor name={actor}></Actor>)
    }
    

      {/* <Todo 
      task="Learn react" 
      isDone={true}></Todo>
      <Todo 
      task="Explore core concepts" 
      isDone={true}></Todo>
      <Todo 
      task="Try jsx" 
      isDone={false}></Todo> */}
      {/* <Device name="laptop" price="55000"></Device>
      <Device name="mobile" price="17000"></Device>
      <Device name="watch" price="3000"></Device>
      <Person></Person>
      
      <Student grade="7" score="99"></Student>
      <Student grade={12} score={"85"}></Student>
      <Student></Student>
      <Developer></Developer>
       */}
      </>
  )
}

function Device(props){
//  console.log(props)
  return <h2>This Device: {props.name} price: {props.price}</h2>
}


function Person(){
  const age = 25
  const money = 20
  const person = {name: 'skaib khan', age: 35}
  return <h3>I am {person.name} person with age: {age + money}</h3>
}
const{grade, score} = {grade:"7", score:"99"}
function Student({grade = 1, score = 0}){
  console.log(grade, score)
  return (
  <div className='student'>
    <h3>This is a student</h3>
    <p>Class: {grade}</p>
    <p>score: {score}</p>
  </div>
)}

function Developer(){
  const developerStyle ={ 
    margin: '20px',
    padding: '20px',
    border: '2px solid purple', 
    borderRadius: '20px'
  }
  return(
    <div style={developerStyle}>
      <h5>Devo dev</h5>
      <p>Coding:</p>
    </div>
  )
}

export default App
