import logo from './logo.svg';
import './App.css';
import Button from './Components/UI/Button';
import AddDetails from './Components/Input/AddDetails';
import { useState } from 'react';
import ShowDetails from './Components/Input/ShowDetails';


function App() {

  const [data, setData] = useState([])

  const dataHandler = (newData) =>  {
    setData(prevData => {
      return [...prevData, newData]
    }
    )

  }

  return (
    <div>
     <AddDetails getData={dataHandler} />
     {data.map(item => 
       <ShowDetails details={item}></ShowDetails>
     )}
    </div>
  );
}

export default App;
