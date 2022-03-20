import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps,setSteps]= useState(0);
    //TODO: add event handler:
    const increaseStep = () =>setSteps(steps + 1);

    useEffect( () =>{
        console.log(steps);
    },[steps])
    return (
        <div style={{padding :'10px', border:'4px solid green',margin : '10px'}}>
            <h1>smart watch</h1>
            <h3>my current steps: {steps}</h3>
            <button onClick={increaseStep}>step count</button>
            <Display name='Vmax' steps={steps}></Display>
        </div>
    );
};

export default Watch;