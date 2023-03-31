import React,{useState} from 'react'
import Child from './child'
const Todo2 = () => {
    const [x, setX] = useState(0)
    const incEle = () => {
        setX(2)
        y = y + 1;
    }
  const [list, setList] = useState([
      {sno:1},
      {sno:2},
      {sno:3},
      {sno:4},
    ])
    var y = 0;
  return (
      <div style={{textAlign:'center'}}>
      {
        list.map((x) => (
          <Child sno={x.sno} />
        ))
        }
    </div>
  )
}

export default Todo2