import './App.css';
import DragDropFile from './components/dragdrop.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      DataGy Header
      </header>
      <body className='App-body'>
        <h1>Drop your model!</h1>
        <DragDropFile />
      </body> 
    </div>
  );
}

export default App;
