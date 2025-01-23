
import  {useState} from 'react'


const App = () => {
  let [count , setNum] = useState(0)
  
  const addNum = () => {
    count += 1
    setNum(count)
    
  }
  const SubNum = ()=>{
    if(count <= 0){
      alert("you can't subtract")
    }else{
      count -=1
      setNum(count) 
    }
   
       
  }
  return (
    <div className='bg-slate-600 h-screen flex items-center'>

      <div className='bg-slate-400 ml-[30%] shadow-lg'>
      <input  value={count}/>
      <br />
      <button className='bg-green-300 rounded-sm text-xl font-bold ml-[40%] p-0.5' onClick={addNum}>Add</button>
      <br />
      <button className='bg-red-300 rounded-sm text-xl font-bold ml-[40%] p-1' onClick={SubNum}>Sub</button>
      </div>

    </div>
  )
}

export default App