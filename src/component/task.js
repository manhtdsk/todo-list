import React, { useEffect, useState } from 'react'
import { deleteTask, isEditTask, cancelChange, changeTask, completeTask } from '../features/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Task = (props) => {
    const dispatch = useDispatch()
    const canEdit = useSelector((state) => state.todo.canEdit)

    const [valueEdit, setValueEdit] = useState(props.todo.title)


    const deleteItem = () => {
        dispatch(deleteTask(props.index))
    }
    const editItem = () => {
        dispatch(isEditTask(props.todo.id))
        if (valueEdit !== props.todo.title) {
            setValueEdit(props.todo.title)
        }
    }
    const onChangeTask = (event) => {
        if (event.target.value !== props.todo.title)
            setValueEdit(event.target.value)
    }
    const cancelChangeTask = () => {
        setValueEdit(props.todo.title)
        dispatch(cancelChange())
    }
    const handleChangeTask = () => {
        dispatch(changeTask({
            index: props.index,
            title: valueEdit
        }))
        dispatch(cancelChange())

    }
    const completeItem = () => {
        // console.log('done task')
        dispatch(completeTask(props.index))

    }


    useEffect(() => {


    })
    // const inputEl = useRef(null);

    // const onButtonClick = () => {
    //     inputEl.current.focus();
    // };


    return (
        <li key={props.todo.id} className={`bg-${props.todo.isComplete ? 'indigo' : "yellow"}-400 shadow-md m-2 flex h-auto rounded-lg`} >
            <div className='h-auto w-10/12 rounded-lg' onDoubleClick={completeItem}>
                <input ref={e => e && e.focus()} onChange={onChangeTask} value={valueEdit} type='text' className={`${props.todo.id === canEdit ? '' : 'hidden'} rounded-lg w-full h-20 p-4 outline-none text-2xl`} />
                <p className={`${props.todo.id === canEdit ? 'hidden' : ''} text-2xl font-extrabold break-all h-full w-full flex items-center justify-center p-3`}>{props.todo.title}</p>
            </div>
            <div className='w-auto shadow  tetx-lg flex items-center  justify-around bg-yellow-200 rounded-lg w-96 m-2'>

                <button disabled={false} onClick={editItem} className={`${props.todo.id === canEdit ? 'hidden' : ''} btn  w-10 rounded-lg hover:bg-blue-500 h-3/4 m-1 w-6 cursor-pointer`}>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                        <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                    </svg>

                </button>

                <button onClick={deleteItem} className={`${props.todo.id === canEdit ? 'hidden' : ''} btn rounded-lg w-10 hover:bg-red-500 h-3/4 m-1 w-6 cursor-pointer`}>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button onClick={handleChangeTask} className={`${props.todo.id === canEdit ? '' : 'hidden'} btn  w-10 rounded-lg hover:bg-green-500 h-3/4 m-1 w-6 cursor-pointer`}>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                </button>
                <button onClick={cancelChangeTask} className={`${props.todo.id === canEdit ? '' : 'hidden'} btn  w-10 rounded-lg hover:bg-red-600 h-3/4 m-1 w-6 cursor-pointer hover:shadow`}>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>

            </div>
        </li >
    )
}