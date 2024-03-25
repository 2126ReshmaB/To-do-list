import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import './App.css';
import Additem from "./Additem";
import SearchItem from "./SearchItem";

function App() {
  const [items,setItems] = useState(
    // [
    //   {
    //     id: 1,
    //     checked: true,
    //     item: "Practice Coding",
    //   }
    //   ,{
    //     id: 2,
    //     checked: true,
    //     item: "Play Cricket"
    //   }
    //   ,{
    //     id: 3,
    //     checked: false,
    //     item: "Read about AI"
    //   }
    // ]

    JSON.parse(localStorage.getItem('todo_list'))
  );
  const [newItem,setNewItem] = useState('')
  const [search, setSearch] = useState('')

  const addItem = (item) => {
    const id = items.length ? items[items.length-1].id + 1 : 1
    const addNewItem = {id,checked : false,item}
    const listItems = [...items,addNewItem]
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {...item,checked:!item.checked} : item)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems))
  }

  const handleSubmit = (e) => {
    // beacuse <form> naturally reload the page (when someone pressed "Enter") so to stop this preventDefault() is used
    e.preventDefault()
    if(!newItem) return;
    addItem(newItem)

    setNewItem('')
  }
  
  return (
    <div className="App">
      <Header title = "To do List"/>
      <SearchItem 
      search = {search}
      setSearch = {setSearch}/>
      <Additem 
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}/>
      <Content 
      items = {items.filter((item) => (item.item).includes(search))}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}/>
      <Footer 
      length = {items.length}/>
    </div>
  );
}

export default App;
