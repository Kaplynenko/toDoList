import propTypes from 'prop-types'
import CartItem from "components/CartItem"
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
itemList:{display:'flex',flexDirection:'column',rowGap:'10px',marginTop:'15px' }
})
const CartItemList=({items,onRemoveItem,onDecrement})=>{
    const styles = useStyles()
    
    return <div className={styles.itemList}>
{items.map((item)=>(
<CartItem key={item.id} item={item} onRemoveItem={onRemoveItem} onDecrement={onDecrement}/>)
)

}
    </div>
}

CartItemList.propTypes={
    items:propTypes.arrayOf(
        propTypes.shape({
            id:propTypes.string.isRequired,
            
        })
    )
}
export default CartItemList;