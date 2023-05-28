import React, { useState } from 'react'

const AddHero = () => {
    const [name, setName] = useState(['']);
    const [element, setElement] = useState(['']);
    const [rarity, setRarity] = useState(['']);
    const [job, setJob] = useState(['']);

    const handleElementChange = (evt) => {
        setElement(evt.target.value);
    };

    const handleRarityChange = (evt) => {
        setRarity(evt.target.value);
    };

    const handleJobChange = (evt) => {
        setJob(evt.target.value);
    };
    
    function handleSubmit(evt) {
        evt.preventDefault();

        fetch('http://127.0.0.1:8000/hero', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'hero_name': name,
                'hero_element': element,
                'hero_rarity': rarity,
                'hero_job': job,
            })
        })
        .then(resp => resp.json())
        .then(data => {console.log(data)})
        .catch(err => {console.log(err)})
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={name}
                    placeholder='Hero Name'
                    onChange={(evt) => setName(evt.target.value)}
                />
                <br/>

                <select value={element} onChange={handleElementChange}>
                    <option value=''>Select Element</option>
                    <option value='Fire'>Fire</option>
                    <option value='Water'>Water</option>
                    <option value='Earth'>Earth</option>
                    <option value='Light'>Light</option>
                    <option value='Dark'>Dark</option>
                </select>
                <br/>

                <select value={rarity} onChange={handleRarityChange}>
                    <option value=''>Select Rarity</option>
                    <option value='Common'>Common</option>
                    <option value='Rare'>Rare</option>
                    <option value='Epic'>Epic</option>
                    <option value='Legendary'>Legendary</option>
                </select>
                <br/>

                <select value={job} onChange={handleJobChange}>
                    <option value=''>Select Job</option>
                    <option value='Brawler'>Brawler</option>
                    <option value='Barbarian'>Barbarian</option>
                    <option value='Knight'>Knight</option>
                    <option value='Rogue'>Rogue</option>
                    <option value='Lancer'>Lancer</option>
                    <option value='Samurai'>Samurai</option>
                    <option value='Ranger'>Ranger</option>
                    <option value='Magician'>Magician</option>
                    <option value='Gunner'>Gunner</option>
                    <option value='Support'>Support</option>
                </select>
                <br/>
                <br/>
                <br/>

                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default AddHero