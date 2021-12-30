import React  from 'react'
import FilterOption from './FilterOption'

function ToDo({todos,optionHandler,pageNumber}) {
   const  currentPageTodos=todos.slice(5*(pageNumber-1),5*(pageNumber));
    return currentPageTodos.map((todo)=>
    (
        <div key={todo.name} className='heading1'>
            <div className='box11'>{todo.name}</div>
            <div className='box21'>{todo.technology}</div>
            <div className='box31'>{todo.status}</div>
            <FilterOption todo={todo} filter={todo.status} optionHandler={optionHandler} />
        </div>
    ))
}

export default ToDo
