import './App.css';
import Input from './Components/Input/Input';
import Button from './Components/Button/Button';
import ToDoCardList from './Components/ToDo/ToDoCard';

const data = [
  { task: "code", description: "do some coding", status: "in progress", id: "1"},
  { task: "clean", description: "do some cleaning", status: "not started", id: "2"},
]

function App() {
  return (
    <div>
    <ToDoCardList todoItems={data}/>
    <Button id="input-button" onClick={() => console.log("this is a test")} height="30px" width="200px"></Button>
    <Input id="input-field"></Input>
    </div>
    
  );
}

export default App;
