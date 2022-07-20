import { createUseStyles } from "react-jss";
import { useState } from "react";

const useStyles = createUseStyles({
label:{backgroundColor:'green',
padding:'10px'}, 
form:{marginTop:'20px'},
 itemName:{marginLeft:'10px'},
 inputItem:{marginLeft:'10px'},
})

const ToDoInputForm = ({onAddNewItem}) => {
  const styles = useStyles()
  const [nameItem,setChangeItem] = useState('')
  const [priceItem,setChangePrice]= useState('')
  const [garantee,setGarantee] = useState(false)
 
 
  const hendleChangeItem =(e)=> setChangeItem(e.target.value)
 const hendleChangePrice =(e)=>setChangePrice(e.target.value)
  const hendleChangeGarantee = (e)=>setGarantee(e.target.checked)
 
 const hendleSubmit = (e)=> {
    e.preventDefault()
    
    
    onAddNewItem({id:Date.now().toString(),
    count:1,
    name:nameItem,
    price:Number(priceItem),
    garantee,})


    setChangeItem('')
    setChangePrice(0)
    setGarantee(false)
  }
  
    
  
  
  return <form onSubmit={hendleSubmit} className={styles.form}>
    <label className={styles.label}>
      <span className={styles.itemName}>name</span>
      <input onChange={hendleChangeItem} value={nameItem} type="text" className={styles.inputItem} />
    </label>
    <label className={styles.label}>
      <span className={styles.itemName}>price</span>
      <input 
      onChange={hendleChangePrice}
      value={priceItem} type ="number" className={styles.inputItem}  />
    </label>
    <label>
      <span>garantee</span>
      <input onChange={hendleChangeGarantee} type="checkbox" checked={garantee}/>
    </label>
    <button type="submit">+add</button>
   
  </form>
};

export default ToDoInputForm;
