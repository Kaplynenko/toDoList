import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
loader:{
    fontWeight:'800',
    color:'red'
}
})

const Loader = () => {
const styles = useStyles()
 return <p className={styles.loader}>Loading...</p>}
export default Loader;
