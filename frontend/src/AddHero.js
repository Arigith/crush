import React, { useState } from 'react'

const AddHero = () => {
    const [name, setName] = useState(['']);
    const [element, setElement] = useState(['']);
    const [rarity, setRarity] = useState(['']);
    const [job, setJob] = useState(['']);
    
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

                <input
                    type='text'
                    value={element}
                    placeholder='Element'
                    onChange={(evt) => setElement(evt.target.value)}
                />
                <br/>

                <input
                    type='text'
                    value={rarity}
                    placeholder='Rarity'
                    onChange={(evt) => setRarity(evt.target.value)}
                />
                <br/>

                <input
                    type='text'
                    value={job}
                    placeholder='Job'
                    onChange={(evt) => setJob(evt.target.value)}
                />
                <br/>

                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default AddHero