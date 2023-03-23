import React, { useEffect, useState } from "react";
import Todo from "./Todo";
const TodoList = () => {
  const [completed, setCompleted] = useState(3);
  const [missed, setMissed] = useState(1);
  const [sno, setSno] = useState(4)
  const [taskName, setTaskName] = useState('')
  const [taskDesc, setTaskDesc] = useState('')
  const [totalTasks, setTotalTasks] = useState(0)
  const [todos, setTodos] = useState(
    [
      {
        sno: 1,
        name: "Full stack Lab",
        desc: "Need to Complete ex-7,8",
      },
      {
        sno: 2,
        name: "Deep Learning Lab",
        desc: "Need to Complete ex-4,5,6",
      },
      {
        sno: 3,
        name: "POSE Lab",
        desc: "Need to Complete Reveiew-2",
      },
    ]
  )
  useEffect(() => { setTotalTasks(todos.length)  },[])
  
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-evenly",
    },
    addTaskBtn: {
      padding: "10px 30px",
    },
    div: {
      display: 'flex',
      gap:'20px'
    }
  };
  const addTask = () => {
    setTodos([...todos,{
      sno: sno,
      name: taskName,
      desc:taskDesc
    }])
    console.log(sno,taskName,taskDesc,todos);
    setSno(sno+1)
    setTaskName('')
    setTaskDesc('')
    setTotalTasks(totalTasks+1)
  }
  const removeTask = (sno) => {
    setTodos(todos.filter(todo=>todo.sno!==sno))
  }
  const completedTask = (count) => {
    setCompleted(completed + count)
    setTotalTasks(totalTasks-count)
  }
  const missedTask = (count) => {
    setMissed(missed + count)
    setTotalTasks(totalTasks+count)
  }
  return (
    <div>
      <div style={styles.navbar}>
        <h2>Todo App</h2>
        <h3>Tasks Remaining: { totalTasks }</h3>
        <h3>Total Completed Tasks: {completed}</h3>
        <h3> Total Missed Tasks: {missed}</h3>
        <div style={styles.div}>
          <button style={styles.addTaskBtn} onClick={addTask}>Add Task+</button>
          <input onChange={(e)=>setTaskName(e.target.value)} type="text" placeholder="Enter task name" />
          <input onChange={(e)=>setTaskDesc(e.target.value)} type="textarea" placeholder="Enter task description" />
        </div>
      </div>
      {todos.map((task) => ( 
        <Todo sno={task.sno} name={task.name} desc={task.desc} removeTask={removeTask} missedTask={missedTask} completedTask={completedTask} />
      ))}
    </div>
  );
};

export default TodoList;
