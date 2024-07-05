import { useState } from "react"
import './css/style.css'
export default function Todo() {

  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])

  function addItem() {
    if (!todo) {
      alert('add an Item')
    }
    const item = {
      id: Math.random(),
      value: todo
    }
    setTodoList(itm => [...itm, item])
    setTodo('')
  }

  return (
    <>
      <div className="container">
        <h1>Todo List App</h1>
        <div className="container-row">

          <input
            value={todo}
            onChange={e => setTodo(e.target.value)}
            type="text" placeholder="add an item"
          />

          <button onClick={() => addItem()}>Add</button>
        </div>
        <div className="list">

          <ul>
            {todoList.map(item => {
              return (
                <li key={item.id}>{item.value} </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}