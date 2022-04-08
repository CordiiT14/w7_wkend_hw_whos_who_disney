import React, {useState, useEffect} from 'react';

const WhosWhoContainer = () => {
    const [character, setCharacters] = useState("");

    useEffect(() => {
        const id = randomIdGenerator()
        getCharacterData(id);
    }, []);

    const getCharacterData = (id) => {
        
        fetch(`https://api.disneyapi.dev/characters/${id}`)
        .then(data => data.json())
        .then(result => setCharacters(result))
    };

    const randomIdGenerator = () => {
        return (Math.floor(Math.random()* 7439))
    }

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


    return(
        <div>
            <h1>Who's Who - Disney</h1>
        </div>
    );
};

export default WhosWhoContainer;