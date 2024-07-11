export default function ListPicker({values}){
    const randomIdx = Math.floor(Math.random()*values.length)
    const randomValue = values[randomIdx]
    return (
        <>
            <p>The list of values are: {values}</p>
            <p>Random value : {randomValue}</p>
        </>
    )
}