import ColorItem from "./ColorItem"

export default function Colors({colors}){
    let moreColors = []
    for(let i=0;i<25;i++){
        moreColors.push(colors[Math.floor(Math.random()*colors.length)])
    }
    
    return(
        <>
        <div style={{display:'grid', gridTemplateColumns:'repeat(5,1fr)'}}>
            {moreColors.map((ele,i)=>(<ColorItem col={ele} key={i} colors={moreColors}/>))}
        </div>
        </>
    )
}