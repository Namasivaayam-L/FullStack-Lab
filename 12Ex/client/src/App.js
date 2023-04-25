import './App.css';
import React,{useState} from "react";
import axios from 'axios'
function App() {
    // const [name, setName] = useState('')
    const handleClick = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/recvReq', { data: 'HI there from Client' })
            .then(res => {console.log(res.data)})
    }
  return (
      <div>
          <button onClick={handleClick}>Contact Server</button>
      </div>
  );
}

export default App;
