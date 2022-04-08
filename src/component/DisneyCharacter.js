import React from 'react'

const DisneyCharacter = ({character})=> {

    return(
        <div>
            <img src={character.imageUrl} alt="Character picture not found"/>
            <h3>{character.name}</h3>
            <p>{character.films}</p>
            <p>{character.shortFilms}</p>
            <p>{character.tvShows}</p>
        </div>

    )
}
export default DisneyCharacter; 