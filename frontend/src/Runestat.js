import React, { useState } from 'react'

const Runestat = () => {
    const hero_name = 'Lukas';

    const [runeone, setRuneone] = useState('');
    const [runetwo, setRunetwo] = useState('');
    const [runethree, setRunethree] = useState('');
    const [targetrunestats, setTargetrunestats] = useState('')
    
    function handleSubmit(evt) {
        evt.preventDefault();

        fetch(`http://127.0.0.1:8000/hero/updatebaserune/${hero_name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'rune_1': runeone,
                'rune_2': runetwo,
                'rune_3': runethree,
                'target_rune_stats': targetrunestats
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
                    value={runeone}
                    placeholder='Runeset 1'
                    onChange={(evt) => setRuneone(evt.target.value)}
                />
                <br/>

                <input
                    type='text'
                    value={runetwo}
                    placeholder='Runeset 2'
                    onChange={(evt) => setRunetwo(evt.target.value)}
                />
                <br/>

                <input
                    type='text'
                    value={runethree}
                    placeholder='Runeset 3'
                    onChange={(evt) => setRunethree(evt.target.value)}
                />
                <br/>

                <input
                    type='text'
                    value={targetrunestats}
                    placeholder='What are we looking for endgame?'
                    onChange={(evt) => setTargetrunestats(evt.target.value)}
                />
                <br/>

                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default Runestat