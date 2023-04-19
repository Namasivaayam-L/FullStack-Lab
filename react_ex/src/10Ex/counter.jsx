import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
const Counter = () => {
    const [count, setCount] = useState(0)
  return (
    <div style={{width: '100vw',height: '100vh',}}>
        <div>
            <Avatar sx={{ bgcolor: deepPurple[500] }}>{count}</Avatar>
        </div>
        <div>
            <Button variant="outlined" color="error" onClick={e=>count-1<0?setCount(0):setCount(count-1)}>-</Button> 
            <Button variant="contained" color="success" onClick={e=>setCount(count+1)}>+</Button>
        </div>
    </div>
  )
}

export default Counter