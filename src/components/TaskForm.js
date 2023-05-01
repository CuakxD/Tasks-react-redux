import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask,editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
function TaskForm() {
    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (params.id) {
            dispatch(editTask(task))
        }
        else {
            dispatch(addTask({
                ...task,
                id: uuid(),
            }))
        }
        navigate('/')


    }

    useEffect(() => {
        if (params.id) {
            setTask(tasks.find((task) => task.id === params.id))
        }
    }, [params.id,tasks])

    return (
        <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
            <label htmlFor="title" className="block text-sm font-bold mb21">Task:</label>
            <input className="w-full rounded-md p-2 bg-zinc-600 mb-2" type="text" name="title" placeholder="title" onChange={handleChange} value={task.title} />
            <label htmlFor="description" className="block text-sm font-bold mb-2">Description:</label>
            <textarea className="w-full rounded-md p-2 bg-zinc-600 mb-2"  name="description" cols="30" rows="10" placeholder="description" onChange={handleChange} value={task.description}>

            </textarea>
            <button className="bg-indigo-600 px-2 py-1 ">Save</button>
        </form>
    )
}

export default TaskForm