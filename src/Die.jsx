export default function Die({numSides=6}){

    const randomNum = Math.floor(Math.random()*numSides)+1
    return <div>{numSides} sided- Die Roll : {randomNum}</div>
}
