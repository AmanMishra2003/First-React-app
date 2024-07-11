import Shoppinglist from "./Shoppinglist";

function ShoppingList({items}){
    // console.log(items)
    return (
        <ul>
            {
                items.map((ele)=>(
                    // <Shoppinglist 
                    // key={ele.id}
                    // item={ele.item}
                    // quantity={ele.quantity}
                    // complete={ele.complete}
                    // />
                    <Shoppinglist key={ele.id} {...ele}/>
                ))
            }
        </ul>
    )
}

export default ShoppingList;

