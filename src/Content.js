import React from 'react'
import ItemsList from './ItemsList';

const Content = ({items,handleCheck, handleDelete}) => {
  
  /* const handleClick = (name) => {
    console.log(`Thanks for the support ${name}`)
  }

  function namee(){
    return console.log("Hello Reshma!")
  }
  const [count,setCount] = useState(99);
  const [name,setName] = useState(() => namee())

  // Don't use objects in useStatae()
  function incrementFunction(){
    setCount((count) => {return count + 1})
    setCount((count) => {return count + 1})
    setCount((count) => {return count + 1})
  }
  function decrementFunction(){
    setCount((count) => {return count - 1})
  } */

//----------------------------------------------------------------
  // const [items,setItems] = useState(
  //   [
  //     {
  //       id: 1,
  //       checked: true,
  //       item: "Practice Coding",
  //     }
  //     ,{
  //       id: 2,
  //       checked: true,
  //       item: "Play Cricket"
  //     }
  //     ,{
  //       id: 3,
  //       checked: false,
  //       item: "Read about AI"
  //     }
  //     ,{
  //       id: 4,
  //       checked: false,
  //       item: "Read about AI"
  //     }
  //   ]
  // );
  // const handleCheck = (id) => {
  //   const listItems = items.map((item) => item.id === id ? {...item,checked:!item.checked} : item)
  //   setItems(listItems)
  //   localStorage.setItem("todo_list",JSON.stringify(listItems))
  // }
  // const handleDelete = (id) => {
  //   const listItems = items.filter((item) => item.id !== id)
  //   setItems(listItems)
  //   localStorage.setItem("todo_list",JSON.stringify(listItems))
  // }
  
  return (
    <main>
      {(items.length) ? (
         <ItemsList 
         items = {items}
         handleCheck = {handleCheck}
         handleDelete = {handleDelete}/>
      ) : 
      <p style = {{marginTop : '2rem',fontFamily: "monospace"}}>Your list is empty</p>
      }
    </main>
  )
}
export default Content;










// useState -> without loading the page fastly changes the code internally
// not within any class component
// not within any conditional statements

// const numbers = [-2,-1,0,-1,2]
// const items = numbers.filter(n => n >= 0).map(n => ({number:n}))