import { useState } from "react"
import Input from "./Input"

function AddTasks({ onAddTask }){
    const[title, setTitle] = useState("")
    const[description, setDescription] = useState("")
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <Input type="text" placeholder="Task title" value={title} onChange={(event) => {setTitle(event.target.value)}}/>
            <Input type="text" placeholder="Task description" value={description} onChange={(event) => {setDescription(event.target.value)}}/>
            <button onClick={() => {
                if(!title.trim() || !description.trim()){
                    return alert("Preencha o título e descrição da tarefa")
                }
                onAddTask(title, description);
                setTitle("");
                setDescription("");
             }} className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium hover:bg-slate-700">Create Task</button>
        </div>
    )
}

export default AddTasks