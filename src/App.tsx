
import React, { ChangeEvent, useState } from 'react';
import './style/Style.css';
// import './App.css'
import { Iinput } from './Interface';
import TodoList from './Todo';
function App() {
  const [input, setInput] = useState<string>("");
  const [items, setItems] = useState<Iinput[]>([]);

  const InputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value)

  }
  const listOfItems = () => {
    const newInput = { myInput: input }
    setItems([...items, newInput])
    // console.log(items)
    setInput("")
  }

  const deleteItems = (deleteTodo: string): void => {
    setItems(items.filter((input) => {
      return input.myInput != deleteTodo;

    }))
  }



  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1> Todo App</h1>
          <div className="form_section d-flex px-3">
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={InputChange} value={input} />
            <button type="submit" className="btn btn-primary" onClick={listOfItems}>Add todo</button>
          </div>
          <ul>
            <li>
              {
                items.map((input: Iinput, key: number) => {
                  return <TodoList key={key} input={input} deleteItems={deleteItems} />
                })

              }
            </li>
          </ul>

        </div>

      </div>
    </>

  );
}


export default App;
