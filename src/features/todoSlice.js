import { createSlice } from '@reduxjs/toolkit'


export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: [
            { id: 1617604429900, title: 'task1', isComplete: false, isEdit: true },
            { id: 1617604429901, title: 'task2', isComplete: true, isEdit: false },
            { id: 1617604429902, title: 'task3', isComplete: true, isEdit: false },
        ],
        canEdit: '',
        isEditing: false,


    },

    reducers: {
        addTask: (state, action) => {
            state.todoList = [...state.todoList, action.payload]
        },
        deleteTask: (state, action) => {
            state.todoList.splice(action.payload, 1)
        },
        isEditTask: (state, action) => {
            state.canEdit = action.payload

        },
        cancelChange: state => {
            state.canEdit = ''
        },
        changeTask: (state, action) => {
            state.todoList[action.payload.index].title = action.payload.title
        },
        completeTask: (state, action) => {
            state.todoList[action.payload].isComplete = !state.todoList[action.payload].isComplete
        }
    }

})

export const { addTask, deleteTask, isEditTask, cancelChange, changeTask, completeTask } = todoSlice.actions
export default todoSlice.reducer