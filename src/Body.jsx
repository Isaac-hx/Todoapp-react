import FormInput from "./Components/FormInput"
import TodoList from "./Components/TodoList"
import { useState } from "react"

export default function Body({input,onUpdateItem,onChangeInput,data,selectedData}){

    
    

    return(
        <div role="Body">
            
            <FormInput input={input} onUpdateItem={onUpdateItem} onChangeInput={onChangeInput}/>
            <TodoList selectedData={selectedData} data={data}/>
           
        </div>
    )
}