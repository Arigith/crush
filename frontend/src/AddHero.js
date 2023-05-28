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
                    <option>Select Element</option>
                    <option>Fire</option>
                    <option>Water</option>
                    <option>Earth</option>
                    <option>Light</option>
                    <option>Dark</option>
                </select>
                <br/>

                <select value={rarity} onChange={handleRarityChange}>
                    <option>Select Rarity</option>
                    <option>Common</option>
                    <option>Rare</option>
                    <option>Epic</option>
                    <option>Legendary</option>
                </select>
                <br/>

                <select value={job} onChange={handleJobChange}>
                    <option>Select Job</option>
                    <option>Brawler</option>
                    <option>Barbarian</option>
                    <option>Knight</option>
                    <option>Rogue</option>
                    <option>Lancer</option>
                    <option>Samurai</option>
                    <option>Ranger</option>
                    <option>Magician</option>
                    <option>Gunner</option>
                    <option>Support</option>
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