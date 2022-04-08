import React from 'react'

const Details = ({character}) => {

    return(
        <div>
        <p>Films: {character.films} </p>
        <p>Short Films: {character.shortFilms}</p>
        <p>Tv Shows: {character.tvShows} </p>
        <p>Video Games: {character.videoGames}</p>
        <p>Park Attractions: {character.parkAttractions} </p>
        </div>
    
    )
}

export default Details;