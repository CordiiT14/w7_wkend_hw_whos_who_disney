import React, {useState, useEffect} from 'react';
import Randomizer from '../component/Randomizer';
import DisneyCharacter from '../component/DisneyCharacter';

const WhosWhoContainer = () => {
    const [character, setCharacter] = useState("");

    // useEffect(() => {
    //     getCharacter();
    // }, []);

    const getCharacter = () => {
        const id = randomIdGenerator()
        fetch(`https://api.disneyapi.dev/characters/${id}`)
        .then(data => data.json())
        .then(result => setCharacter(result))
    };

    const randomIdGenerator = () => {
        return (Math.floor(Math.random()* 7439))
    }


    return(
        <div>
            <h1>Who's Who - Disney</h1>
            <Randomizer getCharacter={getCharacter} />
            <DisneyCharacter character={character}/>
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

