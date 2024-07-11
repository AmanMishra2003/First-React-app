import PropTypes from 'prop-types'
function PropertyListItems({name, rating, price}){
    return(
        <li style={{textAlign:'center', width:'200px', height:'200px'}}>
                    <h3>{name}</h3>
                    <p>${price} a Night</p>
                    <p>{rating}🌟</p>
        </li>
    )
}

PropertyListItems.propTypes = {
    name:PropTypes.string,
    rating:PropTypes.number,
    price:PropTypes.number
}
export default PropertyListItems