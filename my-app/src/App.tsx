import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Components/Input/Input';
import Container from './Components/Page/Container';
import Button from './Components/Button/Button';
import ToDoCard from './Components/ToDo/ToDoCard';

function App() {
  return (
    <div>
    <ToDoCard task="test" description="this is a test" status="in progress" id="123"></ToDoCard>
    <ToDoCard task="test" description="this is a test" status="in progress" id="123"></ToDoCard>
    <ToDoCard task="test" description="this is a test" status="in progress" id="123"></ToDoCard>
    <Button id="input-button" onClick={() => console.log("this is a test")} height="30px" width="200px"></Button>
    <Input id="input-field"></Input>
    </div>
    
  );
}

export default App;
