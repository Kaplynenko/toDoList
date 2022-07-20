import ToDoInputForm from '../ToDoInputForm';
import Loader from '../Loader';
import CartItemList from '../CartItemList';
import TotalAmount from '../TotalAmount';
import {useStyles} from './style'
import { useState } from 'react';
const initialState = [
    {id:'1',name:"printer",price:100,count:0,garantee:true,},
    {id:'2',name:"motherboard",price:150,count:2,garantee:false},
    {id:'3',name:"RAM",price:70,count:2,garantee:true}
]


const Container =()=>{
    const styles = useStyles()
    const [items,setItems]= useState(initialState)
    const [isLoading,setIsLoading]=useState(false)

    const handleRemoveItem=(id)=> setItems((prev)=>prev.filter((item)=>item.id !== id));
    const handleDecrement=(id,step)=> setItems((prev)=>prev.map(item=>item.id === id?{...item,count:item.count + step >=0?item.count +step:item.count}:item))
const handleAddNewItem = (newItem)=> setItems((prev)=>[...prev,newItem])
    
    return(
        <div className={styles.appContainer}>
        <ToDoInputForm onAddNewItem={handleAddNewItem}/>
        {isLoading&&<Loader />}
        
        <CartItemList onRemoveItem={handleRemoveItem} items ={items}
        onDecrement ={handleDecrement}/>
        <TotalAmount items ={items}/>
        </div>
    )
}
export default Container;