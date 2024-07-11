const oneClikc=()=>{
    console.log('Clicked')
}

const OnHover=()=>{
      console.log('OK') 
}
    


function HandleClick(){
    return (
        <>
        <p onMouseOver={OnHover}>HoverMe</p>
        <p >Click This Button!!</p>
        <button onDoubleClick={oneClikc}>Click ME</button>
        </>
    )
}

export default HandleClick;
