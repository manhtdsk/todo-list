import React, { useEffect, useState } from 'react'
import { Input } from 'antd';
import { Task } from './task';
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../features/todoSlice'

export const TodoApp = () => {
    const dispatch = useDispatch()
    const todoList = useSelector((state) => state.todo.todoList)
    const [value, setValue] = useState('')
    const [filter, setFilter] = useState('all')

    const all = todoList

    // const active = todoList.filter((todoList) => todoList.isComplete === false)
    const active = useSelector((state) => state.todo.todoList.filter((state) => state.isComplete === false))
    const completed = useSelector((state) => state.todo.todoList.filter((state) => state.isComplete === true))



    // const completed = todoList.filter((todoList) => todoList.isComplete === true)


    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('submit')
        if (value !== '') {
            const newTask = { id: Date.now(), title: value, isComplete: false }
            dispatch(addTask(newTask))
            setValue('')
        }

    }
    const handleChange = (event) => {
        event.preventDefault();
        setValue(event.target.value);
    };

    useEffect(() => {

    })
    return (
        <div className="todolist h-auto inline-block w-1/2  p-8 bg-gray-100 shadow-lg mt-8">
            <h1 className='text-6xl m-8' onClick={() => console.log(todoList)}>Todo App</h1>
            <form className='m-8' onSubmit={handleSubmit} >
                <label className='h-8' >
                    <Input ref={e => e && e.focus()} className='h-16 mb-5 shadow-sm w-1/4 text-5xl font-bold' onChange={handleChange} placeholder="A Job to be Done" allowClear value={value} />

                </label>

                <input type="submit" value="ADD" className=' bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded' />
            </form>
            <div className='w-auto text-md'>
                <button onClick={() => setFilter('all')} className='rounded-full btn w-24 p-2 m-2 font-bold bg-gray-400 hover:bg-gray-600 '>ALL</button>
                <button onClick={() => setFilter('active')} className='rounded-full btn w-24 p-2 m-2 font-bold bg-yellow-400 hover:bg-yellow-600'>ACTIVE</button>
                <button onClick={() => setFilter('completed')} className='rounded-full btn w-24 p-2 m-2 font-bold bg-indigo-400 hover:bg-indigo-600'>COMPLETED</button>
            </div>
            <ul>

                {/* {todoList.map((todo, index) =>
                    <Task todo={todo} index={index} />
                )} */
                }
                {
                    filter === 'all' ? all.map((all, index) => <Task todo={all} index={index} />) : ''
                }
                {
                    filter === 'active' ? active.map((active, index) => <Task todo={active} index={index} />) : ''
                }
                {
                    filter === 'completed' ? completed.map((completed, index) => <Task todo={completed} index={index} />) : ''
                }

            </ul>



        </div >
    )
}