import React, { useState } from 'react'

const AddHero = () => {
    const [name, setName] = useState(['']);
    const [picture, setPicture] = useState(['']);
    const [element, setElement] = useState(['']);
    const [rarity, setRarity] = useState(['']);
    const [job, setJob] = useState(['']);
    const [obtain, setObtain] = useState(['']);
    const [description, setDescription] = useState(['']);
    
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
                'hero_picture': picture,
                'hero_element': element,
                'hero_rarity': rarity,
                'hero_job': job,
                'hero_obtain': obtain,
                'hero_description': description
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
                    value={picture}
                    placeholder='Picture Name'
                    onChange={(evt) => setPicture(evt.target.value)}
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

                <input
                    type='text'
                    value={obtain}
                    placeholder='Obtained By'
                    onChange={(evt) => setObtain(evt.target.value)}
                />
                <br/>

                <input
                    type='text'
                    value={description}
                    placeholder='Hero Description'
                    onChange={(evt) => setDescription(evt.target.value)}
                />
                <br/>

                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default AddHero