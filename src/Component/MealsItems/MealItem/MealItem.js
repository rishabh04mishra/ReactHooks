import { useContext } from 'react';
import CartContext from '../../../store/context/cartContext';
import MealItemForm from './MalItemForm';
import classes from './MealItem.module.css';
const MealItem = (props) =>{
       const cartCtx= useContext(CartContext)

    const addItemHandler = (amount) => {
        cartCtx.addItem({
            id:props.id,
            price:props.price,
            amount:amount,
            name:props.name,
        })
    }
    const price= `$${props.price.toFixed(2)}`;
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddtoCart={addItemHandler}></MealItemForm>
            </div>
        </li>
    );
}

export default MealItem;