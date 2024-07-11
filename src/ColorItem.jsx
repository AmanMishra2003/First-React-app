import { useState } from "react"
export default function ColorItem({col, colors}){
    let [color, setColor] = useState(col)
    const randomColorOnClick = ()=>{
        const randNum = Math.floor(Math.random()*colors.length)
        setColor(colors[randNum])
    }
    return(
        <div style={{height:'100px', width:'100px',backgroundColor:color}} onClick={randomColorOnClick} >
        </div>
    )
}