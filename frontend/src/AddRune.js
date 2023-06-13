import React, { useState, useEffect } from 'react'

const AddRune = () => {
    const [heroList, setHeroList] = useState(['']);
    const [selectedHero, setSelectedHero] = useState('');
    const uniqueHero = [...new Set(heroList.map(details => details.hero_name))];

    const [runeone, setRuneone] = useState('');
    const [runetwo, setRunetwo] = useState('');
    const [runethree, setRunethree] = useState('');

    const handleRuneOneChange = (evt) => {
        setRuneone(evt.target.value);
    };

    const handleRuneTwoChange = (evt) => {
        setRunetwo(evt.target.value);
    };

    const handleRuneThreeChange = (evt) => {
        setRunethree(evt.target.value);
    };

    async function TableHeros() {
        try {
            const response = await fetch("http://127.0.0.1:8000/hero/get_all");
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
        .then(setSelectedHero(''))
        .then(setRuneone(''))
        .then(setRunetwo(''))
        .then(setRunethree(''))
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

                {selectedHero && (
                    <>
{/* Below will be hidden until you choose a valid hero */}
                    <select value={runeone} onChange={handleRuneOneChange}>
                        <option value=''>Select Rune One</option>
                        <option value='Blight'>Blight</option>
                        <option value='Burning'>Burning</option>
                        <option value='Chilling'>Chilling</option>
                        <option value='Damage'>Damage</option>
                        <option value='Dazed'>Dazed</option>
                        <option value='Frenzy'>Frenzy</option>
                        <option value='Frozen'>Frozen</option>
                        <option value='Guard'>Guard</option>
                        <option value='Helpful'>Helpful</option>
                        <option value='Ignite'>Ignite</option>
                        <option value='Intelligent'>Intelligent</option>
                        <option value='Nimble'>Nimble</option>
                        <option value='Phalanx'>Phalanx</option>
                        <option value='Poisonous'>Poisonous</option>
                        <option value='Precise'>Precise</option>
                        <option value='Rage'>Rage</option>
                        <option value='Resist'>Resist</option>
                        <option value='Splash'>Splash</option>
                        <option value='Spoiling'>Spoiling</option>
                        <option value='Stunning'>Stunning</option>
                        <option value='Swift'>Swift</option>
                        <option value='Vitality'>Vitality</option>
                        <option value='Wrath'>Wrath</option>
                    </select>
                    <br/>

                    <select value={runetwo} onChange={handleRuneTwoChange}>
                        <option value=''>Select Rune Two</option>
                        <option value='Blight'>Blight</option>
                        <option value='Burning'>Burning</option>
                        <option value='Chilling'>Chilling</option>
                        <option value='Damage'>Damage</option>
                        <option value='Dazed'>Dazed</option>
                        <option value='Frenzy'>Frenzy</option>
                        <option value='Frozen'>Frozen</option>
                        <option value='Guard'>Guard</option>
                        <option value='Helpful'>Helpful</option>
                        <option value='Ignite'>Ignite</option>
                        <option value='Intelligent'>Intelligent</option>
                        <option value='Nimble'>Nimble</option>
                        <option value='Phalanx'>Phalanx</option>
                        <option value='Poisonous'>Poisonous</option>
                        <option value='Precise'>Precise</option>
                        <option value='Rage'>Rage</option>
                        <option value='Resist'>Resist</option>
                        <option value='Splash'>Splash</option>
                        <option value='Spoiling'>Spoiling</option>
                        <option value='Stunning'>Stunning</option>
                        <option value='Swift'>Swift</option>
                        <option value='Vitality'>Vitality</option>
                        <option value='Wrath'>Wrath</option>
                    </select>
                    <br/>

                    <select value={runethree} onChange={handleRuneThreeChange}>
                        <option value=''>Select Rune Three</option>
                        <option value='Blight'>Blight</option>
                        <option value='Burning'>Burning</option>
                        <option value='Chilling'>Chilling</option>
                        <option value='Damage'>Damage</option>
                        <option value='Dazed'>Dazed</option>
                        <option value='Frenzy'>Frenzy</option>
                        <option value='Frozen'>Frozen</option>
                        <option value='Guard'>Guard</option>
                        <option value='Helpful'>Helpful</option>
                        <option value='Ignite'>Ignite</option>
                        <option value='Intelligent'>Intelligent</option>
                        <option value='Nimble'>Nimble</option>
                        <option value='Phalanx'>Phalanx</option>
                        <option value='Poisonous'>Poisonous</option>
                        <option value='Precise'>Precise</option>
                        <option value='Rage'>Rage</option>
                        <option value='Resist'>Resist</option>
                        <option value='Splash'>Splash</option>
                        <option value='Spoiling'>Spoiling</option>
                        <option value='Stunning'>Stunning</option>
                        <option value='Swift'>Swift</option>
                        <option value='Vitality'>Vitality</option>
                        <option value='Wrath'>Wrath</option>
                    </select>
                </>
                )}
                <br/>
                <br/>
                <br/>

                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default AddRune