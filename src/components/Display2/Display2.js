import React from 'react';

const Display2 = (props) => {
    return (
        <div style={{padding :'10px',border : '4px solid red'}}>
            <h2>the third steps display</h2>
            <h3>show the third steps :{props.steps}</h3>
        </div>
    );
};

export default Display2;