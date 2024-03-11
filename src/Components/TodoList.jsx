function CheckList(){
  return(
    <ion-icon name="checkmark"></ion-icon>
  )
}

function ListItem({selectedData,data}){
  

  return(
    <>
      {data.map(item=>{
          return(<li onClick={()=>selectedData(item.id)} className={`group cursor-pointer flex items-center my-2`}>
            <div className={`border-2  border-sky-400 w-6 h-6 mr-2 text-center text-xl`}>
              {item.isSelected ? <CheckList/> : ''}
            </div>
              <p className={`group-hover:text-xl transition-all`}>{item.todos}</p>
          </li>)
      })}
    </>
  )
}
export default function TodoList({selectedData,data}) {


  return (
    <ul className={`max-h-40 my-2 overflow-auto `}>
    <ListItem data={data} selectedData={selectedData}/>
    
    
    </ul>
  );
}
