import React from 'react';

const Randomizer = ({getCharacter})=> {

    const handleClick = () => {
        return getCharacter();
    }

    return(
        <div>
            <h2>Click the button and recieve a random Disney Character</h2>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    )
}

export default Randomizer;