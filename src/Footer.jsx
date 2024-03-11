export default function Footer({data}){
    return(
        
        <ul className={`max-h-28 overflow-y-scroll`}>
            <h1 className={`sticky text-xl text-slate-500 font-semibold`}>Task Completed</h1>
            {data.map(item=>{
                if(item.isSelected){
                    return  <li className={`line-through text-gray-500`}>{item.todos}   </li>
                }
            })}
        </ul>
    )
}