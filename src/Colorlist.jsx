export default function Colorlist({colors}){
    console.log(colors)
    const c = colors.map(ele=><li style={{color:ele}}>{ele}</li>)
    return <ul >{c}</ul>
}