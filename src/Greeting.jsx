import Clicker from "./Clicker"

export default function Greeting ({name}){
    // alert(`hello, There${name}`)
    return (
        <div>
            <p>Hello, There {name}</p>
            <Clicker name={name} msg='Hiii!!!' buttonText='Please!, TextMe!!'/>
        </div>
    )
}