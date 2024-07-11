import PropertyListItems from "./PropertyListItems";
function PropertyList({data}){
    return(
        <ul style={{listStyle:'none' , display:'flex', gap:'50px', flexWrap:'wrap',justifyContent:'center',  alignItems:'center'}}>
            {data.map(ele=>(
                <PropertyListItems key={ele.id} {...ele}/>
            ))}
        </ul>
    )
}

export default PropertyList;