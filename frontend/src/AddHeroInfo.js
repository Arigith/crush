import React, { useState, useEffect } from 'react'

const AddHeroInfo = () => {
    const [heroList, setHeroList] = useState(['']);
    const [selectedHero, setSelectedHero] = useState('');
    const uniqueHero = [...new Set(heroList.map(details => details.hero_name))];

    const [heroInfo, setHeroInfo] = useState('');

    async function TableHeros() {
        try {
            const response = await fetch("http://127.0.0.1:8000/hero/get_all")
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

        fetch(`http://127.0.0.1:8000/hero/updateinfo/${selectedHero}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'hero_info': heroInfo
            })
        })
        .then(resp => resp.json())
        .then(data => {console.log(data)})
        .catch(err => {console.log(err)})
        .then(setHeroInfo(''))
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
                    value={heroInfo}
                    placeholder='Place hero info here'
                    onChange={(evt) => setHeroInfo(evt.target.value)}
                />
                <br/>

                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default AddHeroInfo