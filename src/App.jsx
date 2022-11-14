import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'
import './../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [taskName, setTaskName] = useState('');
  const [taskRegion, setTaskRegion] = useState('');
  const [data, setData] = useState('');
  const [task, setTask] = useState('');

  const addItem = () => {
    const newTask = {
      id: uuidv4(),
      taskName: taskName,
      taskRegion: taskRegion,
      deadline: data
    };

    if (taskName.trim().length === 0 || taskRegion.trim().length === 0 || data.trim().length === 0) {
      alert("ПОЖАЛУЙСТА, ЗАПОЛНИТЕ ЗАДАНИЕ")
    }
    else {
      setTask([...task, newTask]);
      setTaskName("");
      setTaskRegion("");
      setData("");

    }
  };

  return (
    <>
      <div class="container">
        <div class="form">
          <input type="text" class="input" placeholder='Введите ваше имя ...'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)} />
          <input type="text" class="input" placeholder='Ваше место рождения ...'
            value={taskRegion}
            onChange={(e) => setTaskRegion(e.target.value)}
          />
          <input type="text" class="input" placeholder='Срок ...'
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
          <button type='sumbit' className='add' onClick={() => {
            addItem();
          }}>Добавить задачу </button>
        </div>
        <div class="tasks"></div>
        <table className='table table-spriped mx-auto mt-5 w-100 table-bordered'>
          <thead>
            <tr><th>ID</th><th>Имя</th><th>Область</th><th>Срок</th><th>Удалить</th></tr>
          </thead>
          <tbody>
            {
              task.length > 0 ? task.map((e, i) => {
                return (
                  <tr key={e.id}><td>{i + 1}</td><td>{e.taskName}</td><td>{e.taskRegion}</td><td>{e.deadline}</td><td><button className='btn btn-danger'>Удалить</button></td></tr>
                )

              }) : 'НЕ НАЙДЕН'
            }
          </tbody>
        </table>

      </div>
    </>
  )
}

export default App
