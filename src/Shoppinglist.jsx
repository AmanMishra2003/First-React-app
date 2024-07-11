import { useState } from "react";


function Shoppinglist({ item, quantity, complete}){
    const [active , setactive] = useState(true)
    const toggle = ()=>{
        setactive(!active)
    }
return (
    <>
    <li style={{color:complete?'purple':'grey', textAlign:'left', textDecoration:active?'line-through':''}} >
                    <b>Item: </b> {item} , <b>Quantity: </b> {quantity} 
    </li>
    <button onClick={toggle}>❌</button>
    </>
)
}

export default Shoppinglist;
