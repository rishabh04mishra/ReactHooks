import React from 'react';
import classes from './Header.module.css';
import mimg from '../../../assets/meals.jpg';
import CartButton from '../CartButton/CartButton';

const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1 style={{color: '#b94517'}}>YummyMeals</h1>
            <CartButton click={props.open}></CartButton>
        </header>
        <div className={classes['main-img']}>
            <img src= {mimg} alt="Dlicious Food"></img>
        </div>
    </React.Fragment>
}

export default Header;