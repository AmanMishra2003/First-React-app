import CountUp from 'react-countup';

export default function DiceRollGame(){
    let randomNumber1 = Math.floor(Math.random()*6)+1
    let randomNumber2 = Math.floor(Math.random()*6)+1
    const isWinner = randomNumber1===randomNumber2
    return(
        <div style={{marginBottom:'10px', border:`2px solid ${isWinner?'white':'purple'}`, padding:'20px'  }}>
        <CountUp start={0} end={randomNumber1}>
             {({ countUpRef }) => (
            <div>
                Dice Number is :<span ref={countUpRef} />
            </div>
        )}</CountUp>

        <CountUp start={0} end={randomNumber2}>
             {({ countUpRef }) => (
            <div>
                Dice Number is :<span ref={countUpRef} />
            </div>
        )}</CountUp>

        { isWinner && <h3>You Win!!</h3>}
        
        </div>
    )
}