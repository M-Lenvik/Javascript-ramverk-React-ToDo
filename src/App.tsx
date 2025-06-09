import "./App.css";
import { ToDoApp } from "./components/ToDoApp";

function App() {
  return <>
    <div className="min-h-screen w-full bg-amber-400 p-4">
      <div className="max-w-screen-lg mx-auto">
        <ToDoApp/>
      </div>
    </div>
  </>;
}

export default App;
