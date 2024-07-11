export default function Clicker({name, msg, buttonText}){
    return(
        <>
        <button onClick={()=>{
            alert(`${msg}, ${name}`)
        }}>{buttonText}</button>
        </>
    )
}