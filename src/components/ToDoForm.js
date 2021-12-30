import React, { useState } from "react";



export function ToDoForm({addToDo,inputRef,input,setInput})
{
    


    const submitHandler=()=>
    {
        addToDo({
            id:Math.floor(Math.random()*10000),
            name:input.projectName,
            technology:input.technologyName,
            
        })
        setInput({projectName:'',technologyName:''});
    }

   

   

    return (
        <div>
            <div className="new-task">
            <div className="heading">New Task</div>
            <div className="inputbox">
                <div className="project-name">
                    <div className="projectName">Project Name</div>
                    <input ref={inputRef} placeholder="Project name" value={input.projectName} onChange={e=>setInput({...input,projectName:e.target.value}) } />
                </div>
                <div className="technology-name">
                    <div className="technologyName">Technology Name</div>
                    <select className="inputtechnology" value={input.technologyName} onChange={e=>setInput({...input,technologyName:e.target.value})}>
                        <option></option>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="nodejs">Nodejs</option>
                        <option value="dotnet">Dot net</option>
                    </select>
                </div>
                <button className="addButton" onClick={submitHandler}>Create</button>
            </div>
        </div>
        </div>
    )
}