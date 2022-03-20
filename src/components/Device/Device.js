import React from 'react';
import DeviceDeatails from './DeviceDeatails/DeviceDeatails';

const Device = (props) => {
    return (
        <div>
           <h1>Name Of the phone: {props.name}</h1> 
            <DeviceDeatails price={props.price}></DeviceDeatails>
        </div>
    );
};

export default Device;