import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { initialTodos } from "./initial-data";
import { useState } from 'react';

function App(){
  const [data,setData] = useState(initialTodos)
  const [input,setInput] = useState('')
    
    
  function selectedData(id){
      const newData = [...data]
      const selectedData = newData.map(item => {
      if(item.id === id){
          item.isSelected = !item.isSelected
      }
      return item
      })

      setData(selectedData)

  }

  function onUpdateItem(e){
      e.preventDefault()
      const lastIndex = data.length - 1
      const newId =(data[lastIndex]).id + 1
      const newData = [...data,{id:newId,todos:input,isSelected:false}]
      setData(newData)
      setInput('')

  }
  function onChangeInput(e){
    setInput(e.target.value)
  }
  return(
    <div className={`h-screen w-full bg-pink-100 flex justify-center items-center`}>
      <div role="container" className={`bg-white w-96 p-4 shhadow-md scale-110`}>
        <Header/>
        <hr className='my-4'/>
        <Body onUpdateItem={onUpdateItem} onChangeInput={onChangeInput} selectedData={selectedData} input={input} data={data}/>
        <hr className='my-4'/>
        <Footer data={data}/>

      </div>
    </div>
  )
  
}


export default App