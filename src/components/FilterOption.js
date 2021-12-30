import React from 'react'
import { STATUS } from './Constants'

function FilterOption({todo,filter,optionHandler}) {
    if(filter===STATUS.INPROGRESS)
    {
        return(
      
            <select className='complete3' onChange={(e)=>optionHandler(todo.id,e.target.value)}>
                    <option >choose</option>
                    <option>completed</option>
                    <option>edit</option>
                    <option>remove</option>
                </select>
    )
    }
    else{
        return null;
    }

   
   
   
}

export default FilterOption


