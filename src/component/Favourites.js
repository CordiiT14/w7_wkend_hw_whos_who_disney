import React from 'react';

const Favourites = ({favourites}) => {

    const favNodes = favourites.map((character, index) => {
        return(
            <li key={index}>{character.name}</li>
        )
    })

    const searchFavs= () => {

    }

    return(
        <div>
            <h2>Your Favourite Characters</h2>
            <input type="text" value="" onChange={searchFavs} placeholder="search"></input>
            <ul>
                {favNodes}
            </ul>
        </div>
    )
}

export default Favourites;