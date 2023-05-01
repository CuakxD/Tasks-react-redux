import logo from './logocuakxd.svg';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
function App() {

  return (
    <div className="bg-zinc-900 h-screen text-white  ">

      <div className='items-center justify-center h-full'>

        <BrowserRouter>
          <Nav />
          <div className='flex items-center justify-center '>
          <Routes>
            <Route path='/' element={<TaskList />} />
            <Route path='/createTasks' element={<TaskForm />} />
            <Route path='/editTask/:id' element={<TaskForm />} />

          </Routes>
          </div>
            <Footer/>
        </BrowserRouter>
      </div>


    </div>
  );
}

export default App;
