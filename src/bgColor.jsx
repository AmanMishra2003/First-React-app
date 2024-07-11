import { useState } from "react"


export default function Bgcolor(){
    let [color, setColor] = useState(null)
    return (
        <>
        <input type="color" style={{height:'100px', width:'200px'}} value={color} onChange={(e)=>{return setColor(e.target.value)}}/>
        <div style={{height:'500px', width:'500px', backgroundColor:color}}>
        </div>
        </>
    )
}