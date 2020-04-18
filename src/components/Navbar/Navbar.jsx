import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from 'react-router-dom';


const Navbar = () => {
    return  <nav className={classes.nav}>
    <div className={classes.item}>
      <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
     </div>
    <div className={classes.item}>
      <NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink>
     </div>
    <div className={classes.item}>
      <NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink>
     </div>
    <div className={classes.item}>
      <NavLink to='/music' activeClassName={classes.activeLink}>Music</NavLink>
     </div>
     <div className={classes.item}>
      <NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink>
     </div>
     <div className={classes.item}>
      <NavLink to='/users' activeClassName={classes.activeLink}>Find users</NavLink>
     </div>
     <div className={classes.sitebar}>
       <div className={classes.namesitebar}>
         Friends
       </div>
       <div className={classes.myfriends}>
         <div>
          <img src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" alt="ava"/>
          <NavLink to='/dialogs/1'>Oleg</NavLink>
         </div>
         <div>
          <img src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" alt="ava"/>
          <NavLink to='/dialogs/2'>Ruslan</NavLink>
         </div>
         <div>
          <img src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg" alt="ava"/>
          <NavLink to='/dialogs/8'>Anastasia</NavLink>
         </div>
       </div>
     </div>
  </nav>
    }

export default Navbar;