import React from 'react';

const DisneyCharacter = ({character, moreInformation, addFavourites})=> {

    const handleClick = () => {
        return moreInformation()
    }

    const addToFavs = () => {
        return addFavourites(character)
    }

    return(
        <div>
            { character ? <img src={character.imageUrl} alt="Character picture not found"/> : null }
            { character ? <h3>{character.name}</h3> : null }
            { character ? <button onClick={addToFavs}>Add to Favourites</button>: null}
            { character ? <button onClick={handleClick}>Find out More</button> : null }
            
        </div>

    )
}
export default DisneyCharacter; 