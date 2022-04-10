import React, {useState} from 'react';
import DisneyCharacter from './DisneyCharacter';

const Favourites = ({favourites}) => {
    const [search, setSearch] = useState("");



    const favNodes = favourites.map((character, index) => {
        return(
            <li key={index}>{character.name}</li>
        )
    })

    const searchFavs = () => {
        favourites.filter( (fav) => {
            if (search == "") {
                return {favNodes}
            } else if (fav.name.toLowerCase().includes(search.toLowerCase())){
                return (<li>{fav.name}</li>)
            }
            else {
                return {favNodes}
            }

        })
    }


    return(
        <div>
            <h2>Your Favourite Characters</h2>
            <label>Search: </label>
            <input type="text" onChange={event => setSearch(event.target.value)}></input>
            <ul>
                {favNodes}
                {searchFavs}
            </ul> 
            
            
        </div>
    )
}

export default Favourites;