export default function Slotmachine({val1,val2,val3}){
    const isWinner= val1===val2 && val2===val3
    return (
        <>
            <p>{val1} {val2} {val3}</p>
            {isWinner? <p style={{color:'green'}}>You Win!</p>:<p style={{color:'red'}}>You Lose!</p>}
            {isWinner? <p style={{color:'white'}}>Congrats!</p>:null}
        </>
    )
}