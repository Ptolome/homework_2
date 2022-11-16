import React,{useState} from "react";
import Counter from './counter'

const CountersList = () => {
    const initialState = [
        {id:0, value:0, name:'aple'},
        {id:1, value:4, name:'nuts'},
        {id:2, value:0, name:'tomato'},
        {id:3, value:0, name:'orange'},
        {id:4, value:0, name:'potato'},
    ]
    
    const [counters,setCounters] = useState(initialState );

    const handleDelete = (id) =>{ setCounters(counters.filter((item)=>item.id!==id))
        
    }

    const handleReset = () =>{
        setCounters(initialState)
        console.log('handleReset')
    }
    
    const handleIncrement = (id) => {
        let element =counters.findIndex((item)=>item.id == id)
        const newCounters = counters.map(item=>item)
        newCounters[element].value +=1
                
        setCounters(newCounters)

    }
    const handleDecrement = (id) => {
        
        let element =counters.findIndex((item)=>item.id == id)
        const newCounters = counters.map(item=>item)
        newCounters[element].value -=1
                
        setCounters(newCounters)
        
    //    setCounters(counters[element].value -=1)

    }
    return (
    <>
        {counters.map((count)=>(
            <Counter key = {count.id}
            {...count}
            onDelete= {handleDelete}
            onIncrement = {handleIncrement}
            onDecrement = {handleDecrement}/>
         ))}
        <button className="btn btn-primary btn-sm m-2"
        onClick={handleReset}>Сброс</button>
       
    </>
    );

}
export default CountersList;