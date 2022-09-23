import './App.css'
import Sidebar from './components/Sidebar'
import CreateNote from './components/CreateNote'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/add-note" element={<CreateNote />} />
      </Routes>
    </div>
  );
}

export default App;
