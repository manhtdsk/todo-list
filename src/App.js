
import './App.css';
import { TodoApp } from './component/todo'
function App() {
  return (
    <div className="App flex flex-col items-center bg-yellow-100 h-screen text-center overflow-y-scroll p-5">
      <TodoApp />
    </div>
  );
}

export default App;
