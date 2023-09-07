
import "./App.css";
import Todo from "./Todo";
import Mimmi from "./Mimmi";
import Actor from "./Mimmi";
import Singer from "./Singer";
import Books from "./Books";

function App() {
  const friends = ['faisu', 'jannat', 'urmi', 'maria', 'tania']


  const books = [
    {id:1, name: 'b.s', price: 100},
    {id:2, name: 'math', price: 120},
    {id:3, name: 'bangla', price: 200},
    {id:4, name: 'eng', price: 140},
    {id:5, name: 'sci', price: 190},
  ]

  const singers = [
    {id:1,name: 'mita', age: 68},
    {id:2,name: 'gita', age: 70},
    {id:3,name: 'yita', age: 50},
    {id:4,name: 'uiya', age: 30},
  ]

return (
    <>
      <h3>Vite + React</h3>
     
      <Books books={books}></Books>

      <Actor name={"Sadia"}></Actor>
      {
        friends.map((friend, key) => <Actor key={key} name={friend}></Actor>)
      }
      
      {
        singers.map(singer => <Singer singer={singer}> </Singer>)
      }


      {/* <Todo task="learn react" isDone={true}></Todo>
      <Todo task="learn jsx" isDone={false}></Todo>
      <Todo task="learn js" isDone={true}></Todo> */}
      {/* <Device name="laptop" price="55"></Device>
      <Device name="mobile" price="20"></Device>
      <Device name="earring" price="40"></Device>
      <Person></Person>
      <Student grade="7" score='99'></Student>
      <Student grade={12} score='80'></Student>
      <Student></Student> */}
    </>
  );
}


function Device(props){
  // console.log(props);
  return <h2>This device: {props.name} price {props.price} </h2>
}

function Person(){
  const age = 20
  const money = 20
  const person = {
    name: "Sadia",
    
    
  }
  return(
    <h3>My name is {person.name} and I am {age} years old and I have {money} dollars</h3>
  )

}


function Student({grade=1, score=0}){
  console.log(grade, score);
  return(
    <div className="student">
      <h3>This is student</h3>
      <p>class: {grade}</p>
      <p>score: {score}</p>
    </div>
  )
}




export default App;
