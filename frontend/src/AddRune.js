import React, { useState, useEffect } from 'react'

const AddRune = () => {
    const [heroList, setHeroList] = useState(['']);
    const [selectedHero, setSelectedHero] = useState('');
    const uniqueHero = [...new Set(heroList.map(details => details.hero_name))];

    const [runeone, setRuneone] = useState('');
    const [runetwo, setRunetwo] = useState('');
    const [runethree, setRunethree] = useState('');

    async function TableHeros() {
        try {
            const response = await fetch("http://127.0.0.1:8000/hero/get_all");
            // const response = await fetch("http://127.0.0.1:8000/hero/get_all", {
            //     headers: {
            //         'Authorization': `Bearer ${window.localStorage.getItem('access_token')}`
            //     }}
            // );
            const data = await response.json();
            console.log(data);
            setHeroList(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        TableHeros();
    }, []);

    function handleSubmit(evt) {
        evt.preventDefault();

        fetch(`http://127.0.0.1:8000/hero/updaterune/${selectedHero}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'hero_rune_1': runeone,
                'hero_rune_2': runetwo,
                'hero_rune_3': runethree
            })
        })
        .then(resp => resp.json())
        .then(data => {console.log(data)})
        .catch(err => {console.log(err)})
        .then(setRuneone(''))
        .then(setRunetwo(''))
        .then(setRunethree(''))
        .then(setTargetrunestats(''))
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <select value={selectedHero} onChange={(evt) => setSelectedHero(evt.target.value)}>
                        <option value=''>--Select Hero--</option>
                        {uniqueHero.map(hero => (
                            <option value={hero}>{hero}</option>
                        ))}
                    </select>
                </label>
                <br/>

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

                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default AddRune