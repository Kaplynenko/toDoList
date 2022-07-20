import propTypes from 'prop-types'
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
    counter:{display:'flex',columnGap:'5px',alignItems:'center',backgroundColor:' rgb(51, 160, 160)'},
    value({item}){
        return{
           color: !item.count? 'red':'white',
           fontWeight: !item.count? '800':'400'
        }
    },

})
const CartItem = ({item,onRemoveItem,onDecrement})=>{
  const styles=useStyles({item})
    const totalPrice = item.price*item.count
    const decrement = ()=>onDecrement(item.id,-1)
    const increment = ()=>onDecrement(item.id,1)
  return <div className={styles.counter}>
        <span>{item.name}</span>
        <span>{item.price}$</span>
        <div>
        <button onClick={decrement}>-</button>
        <span className={styles.value} >{item.count}</span>
        <button onClick={increment}>+</button>
        </div>
        <span>{totalPrice}$ {item.garantee&& '+10%'}</span>
        <button onClick={()=>onRemoveItem(item.id)}>X</button>
    </div>
}

CartItem.propTypes={
    item: 
        propTypes.shape({
            name:propTypes.string.isRequired,
            price:propTypes.number.isRequired,
            count:propTypes.number.isRequired,
            id:propTypes.string.isRequired,
        })
    
}
export default CartItem;