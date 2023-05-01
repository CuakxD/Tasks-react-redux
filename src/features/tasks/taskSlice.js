import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        completed: false
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        completed: false
    },
    {
        id: "3",
        title: "Task 3",
        description: "Task 3 description",
        completed: false
    }
]
export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask:(state,action)=>{
           const taksfound= state.find(task=>task.id === action.payload)
           if(taksfound){
            state.splice(state.indexOf(taksfound),1)
           }
        },
        editTask:(state,action)=>{
            const {id,title,description} =action.payload
            const foundTaks = state.find(task => task.id === id)
            if (foundTaks) {
                foundTaks.title=title
                foundTaks.description=description
            }
        }
    }
})

export const { addTask,deleteTask,editTask } = taskSlice.actions
export default taskSlice.reducer