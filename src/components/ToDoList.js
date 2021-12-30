import React, { useState, useEffect, useRef } from "react";
import { ACTIONS, STATUS } from "./Constants";
import ToDo from "./ToDo";
import { ToDoForm } from "./ToDoForm";
import { validateProject } from "./utils";


export function ToDoList() {

    const [input,setInput]=useState({projectName:'',technologyName:''});
    const [ToDos, setToDos] = useState([]);
    const [pageNumber, setPage] = useState(1);
    const inputRef = useRef();

    useEffect(() => {

        console.log('updating todos');
    },[ToDos.length])

    const addToDo = (todo) => {
        console.log(todo)
        const { isValid, message } = validateProject(todo);
        if (isValid) {
            const newToDos = [{ ...todo, status: STATUS.INPROGRESS }, ...ToDos];
            console.log(newToDos);
            setToDos(newToDos);
        }
        else {
            alert(message);
        }

    }

    


    const removeHandler = (id) => {
        const removearr = [...ToDos].filter(todo => todo.id !== id);
        setToDos(removearr);
    }

    const editHandler = (id) => {
        const edit = [...ToDos].find(todo => todo.id === id)
        setInput({projectName:edit.name,technologyName:edit.technology})
        inputRef.current.focus();
        const restTodos = [...ToDos].filter(todo => todo.id !== id);
        setToDos(restTodos)
    }

    const completeHandler = (id) => {
        let completearr = ToDos.map(todo => {
            console.log(id);
            console.log(todo.id)
            if (todo.id === id) {
                console.log(todo);
                todo.status = STATUS.COMPLETED
            }
            return todo
        })
        setToDos(completearr);
    }

    const optionHandler = (id, option) => {
        console.log(option);
        if (option === ACTIONS.COMPLETED) {
            console.log('task completed')
            completeHandler(id);
        }
        else if (option === ACTIONS.EDIT) {
            editHandler(id);
        }
        else if (option === ACTIONS.REMOVE) {
            console.log('performing remove')
            removeHandler(id);
        }
    }

    const incrementCount = () => {
        console.log('incrementing count')
        if (pageNumber < ToDos.length / 5) {
            setPage(prev => prev + 1)
        }
    }

    const decrementCount = () => {
        console.log('decrementing count')
        if (pageNumber > 1) {
            setPage(prev => prev - 1);
        }
    }

    return (
        <div>
            <ToDoForm addToDo={addToDo} inputRef={inputRef} input={input} setInput={setInput} />
            <div className="tasks">
                <div className="heading">Tasks</div>
                <div className="display-heading">
                    <div className="box1">ProjectName</div>
                    <div className="box2">Technology</div>
                    <div className="box3">status</div>
                    <div className="action-heading">Actions</div>
                </div>
                <div className="display-box">
                    <div className='task-list'>
                        <ToDo todos={ToDos} optionHandler={optionHandler} pageNumber={pageNumber} />
                    </div>

                    <div className="footer">
                        <button className="footer1 first previous" onClick={decrementCount} >Prev</button>
                        <div className="footer1 current">{pageNumber}</div>
                        <button className="footer1 next" onClick={incrementCount}>Next</button>
                    </div>
                </div>
            </div>
        </div>


    )
}