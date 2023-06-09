import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TaskList() {

  const tasks = useSelector(state => state.tasks)
  const distpatch = useDispatch()

  const handleDelete = (id) => {
    distpatch(deleteTask(id))
  }
  console.log(tasks)
  return (
    <div className="w-4/6">
      <div className="grid grid-cols-3 gap-4">
        {tasks.map(task => (
          <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{task.title}</h3>

              <div className="flex gap-x-2">
              <Link className="bg-zinc-600 px-2 py-1 text-md rounded-md" to={`/editTask/${task.id}`}>
                  Edit
                </Link>
                <button className="bg-red-500 px-2 py-1 text-md rounded-md " onClick={() => handleDelete(task.id)}>Delete</button>
              
              </div>

            </header>

            <p>{task.description}</p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default TaskList