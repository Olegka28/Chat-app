import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return  (
    <header className={classes.header}>
    <img src = "https://www.searchpng.com/wp-content/uploads/2019/02/Avengers-Logo-PNG-Transparent-Avengers-Logo-715x715.png">
    </img>
    <h4>My First Social Network</h4>
    <div className={classes.loginBlock}>
        {props.isAuth 
        ? props.login 
        : <NavLink to={'/auth'}>Login</NavLink>}
    </div>
 </header>
)}

export default Header;