import preloader from './../../../img/Spinner-1s-200px.svg';
import React from 'react';


let Preloader = (props) => {
    return <div style={ { backgroundColor: 'white'} }>
            <img src={preloader} />
    </div>
}


export default Preloader;