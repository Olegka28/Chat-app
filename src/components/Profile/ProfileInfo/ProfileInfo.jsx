import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

    return   (
  <div className={classes.content}>
    <div className={classes.img}>
      <img className={classes.img_header} src = "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    </div>
    <div className={classes.descriptionBlock}>
      <img src={props.profile.photos.small}/>
      <img src = "https://media3.s-nbcnews.com/j/newscms/2019_41/3047866/191010-japan-stalker-mc-1121_06b4c20bbf96a51dc8663f334404a899.fit-760w.JPG"/>
      <div className={classes.about_me}><span>Немного обо мне</span>
      <p>Я начинающий програмист на React</p> </div>
    </div>
  </div>
    )
}

export default ProfileInfo;