import React from 'react';
import Display2 from '../Display2/Display2';

const Display = (props) => {
    return (
        <div style={{padding :'10px',border : '4px solid blue',margin : '20px'}}>
           <h2>display the phone: {props.name}</h2>
           <h3>show 2nd display steps : {props.steps}</h3>
           <Display2 steps={props.steps}></Display2>
        </div>
    );
};

export default Display;