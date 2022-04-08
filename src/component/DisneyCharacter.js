import React from 'react';

const DisneyCharacter = ({character, moreInformation})=> {

    const handleClick = () => {
        return moreInformation()
    }

    return(
        <div>
            <img src={character.imageUrl} alt="Character picture not found"/>
            <h3>{character.name}</h3>
            <button onClick={handleClick}>Find out More</button>
            
        </div>

    )
}
export default DisneyCharacter; 