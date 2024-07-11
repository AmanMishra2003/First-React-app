import { useState } from "react"

export default function Counter(){
    let [count , setCount] = useState(0);
    let [color, setColor] = useState('white')
    const increment=()=>{
        if(count>=0){
            setCount(++count)
            setColor('green')
        }
    }
    const decrement=()=>{
        if(count>0){
            setCount(--count)
            setColor('red')
        }
    }
    return (
        <>
        <button onClick={increment}>Increment (+)</button>
        <span style={{color:color, padding:'10px'}}>{count}</span>
        <button onClick={decrement}>Decrement (-)</button>
        </>
    )
}
