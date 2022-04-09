import React, {useState, useEffect} from 'react';
import Randomizer from '../component/Randomizer';
import DisneyCharacter from '../component/DisneyCharacter';
import Details from '../component/Details';
import Favourites from '../component/Favourites';

const WhosWhoContainer = () => {
    const [character, setCharacter] = useState("");
    const [characterInfo, setCharacterInfo] = useState(false)
    const [favourites, setFavourites] = useState([]);

    // useEffect(() => {
    //     getCharacter();
    // }, []);

    const getCharacter = () => {
        const id = randomIdGenerator()
        fetch(`https://api.disneyapi.dev/characters/${id}`)
        .then(data => data.json())
        .then(result => setCharacter(result));
        setCharacterInfo(false);
    };

    const randomIdGenerator = () => {
        return (Math.floor(Math.random()* 7439))
    }

    const moreInformation = () => {
        setCharacterInfo(true)
    }

    const addFavourites = (character) => {
        const updateFavs = favourites;
        updateFavs.push(character);
        setFavourites(updateFavs);

    }

    return(
        <div>
            <h1>Who's Who - Disney</h1>
            <Randomizer getCharacter={getCharacter} />
            <DisneyCharacter character={character} moreInformation={moreInformation} addFavourites={addFavourites}/>
            {characterInfo ? <Details character={character}/> : null}
            <Favourites favourites={favourites}/>
        </div>
    );
};

export default WhosWhoContainer;



    // async function getCharacterData() {
    //     const allData = [];
    //     let url = 'https://api.disneyapi.dev/characters'

    //     do {
    //         const result = await fetch(url)
    //         .then(data => data.json())
    //         .then(data => {url = data.nextPage})
    //         allData.push(result)
    //     }
    //     while (url)

    //     return setAllCharacters(allData);
    // }

