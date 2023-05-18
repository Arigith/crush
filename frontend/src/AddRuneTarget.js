import React, { useState, useEffect } from 'react'

const AddRuneTarget = () => {
    const [heroList, setHeroList] = useState(['']);
    const [selectedHero, setSelectedHero] = useState('');
    const uniqueHero = [...new Set(heroList.map(details => details.hero_name))];

    const [runeTargetOne, setRuneTargetOne] = useState([''])
    const [runeTargetOnePercentage, setRuneTargetOnePercentage] = useState([''])
    const [runeTargetTwo, setRuneTargetTwo] = useState([''])
    const [runeTargetTwoPercentage, setRuneTargetTwoPercentage] = useState([''])
    const [runeTargetThree, setRuneTargetThree] = useState([''])
    const [runeTargetThreePercentage, setRuneTargetThreePercentage] = useState([''])
    const [runeTargetFour, setRuneTargetFour] = useState([''])
    const [runeTargetFourPercentage, setRuneTargetFourPercentage] = useState([''])
    const [runeTargetFive, setRuneTargetFive] = useState([''])
    const [runeTargetFivePercentage, setRuneTargetFivePercentage] = useState([''])
    const [runeTargetSix, setRuneTargetSix] = useState([''])
    const [runeTargetSixPercentage, setRuneTargetSixPercentage] = useState([''])
    const [runeTargetSeven, setRuneTargetSeven] = useState([''])
    const [runeTargetSevenPercentage, setRuneTargetSevenPercentage] = useState([''])

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

    function handleChange(evt) {
        evt.preventDefault();

        fetch(`http://127.0.0.1:8000/hero/updaterunetargets/${selectedHero}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'hero_rune_target_1': runeTargetOne,
                'hero_rune_target_1_percentage': runeTargetOnePercentage,
                'hero_rune_target_2': runeTargetTwo,
                'hero_rune_target_2_percentage': runeTargetTwoPercentage,
                'hero_rune_target_3': runeTargetThree,
                'hero_rune_target_3_percentage': runeTargetThreePercentage,
                'hero_rune_target_4': runeTargetFour,
                'hero_rune_target_4_percentage': runeTargetFourPercentage,
                'hero_rune_target_5': runeTargetFive,
                'hero_rune_target_5_percentage': runeTargetFivePercentage,
                'hero_rune_target_6': runeTargetSix,
                'hero_rune_target_6_percentage': runeTargetSixPercentage,
                'hero_rune_target_7': runeTargetSeven,
                'hero_rune_target_7_percentage': runeTargetSevenPercentage
            })
        })

        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
        .then(setRuneTargetOne(''))
        .then(setRuneTargetOnePercentage(''))
        .then(setRuneTargetTwo(''))
        .then(setRuneTargetTwoPercentage(''))
        .then(setRuneTargetThree(''))
        .then(setRuneTargetThreePercentage(''))
        .then(setRuneTargetFour(''))
        .then(setRuneTargetFourPercentage(''))
        .then(setRuneTargetFive(''))
        .then(setRuneTargetFivePercentage(''))
        .then(setRuneTargetSix(''))
        .then(setRuneTargetSixPercentage(''))
        .then(setRuneTargetSeven(''))
        .then(setRuneTargetSevenPercentage(''))
    }

    return (
        <div>
            <form onSubmit={handleChange}>
            <label>
                <select value={selectedHero} onChange={(evt) => setSelectedHero(evt.target.value)}>
                    <option value=''>--Select Hero--</option>
                    {uniqueHero.map(hero => (
                        <option value={hero}>{hero}</option>
                    ))}
                </select>
            </label>
            <br/>

                <label>Target One: </label>
                <input
                    type='text'
                    id='hero_rune_target_1'
                    value={runeTargetOne}
                    autoComplete='off'
                    onChange={(e) => setRuneTargetOne(e.target.value)}
                    required
                />
                <br/>

                <label>Target One Percentage: </label>
                <input
                    type='number'
                    id='hero_rune_target_1_percentage'
                    value={runeTargetOnePercentage}
                    autoComplete='off'
                    onChange={(e) => setRuneTargetOnePercentage(e.target.value)}
                    required
                />
                <br/>

                <label>Target Two: </label>
                <input
                    type='text'
                    id='hero_rune_target_2'
                    value={runeTargetTwo}
                    autoComplete='off'
                    onChange={(e) => setRuneTargetTwo(e.target.value)}
                    required
                />
                <br/>

                <label>Target Two Percentage: </label>
                <input
                    type='number'
                    id='hero_rune_target_2_percentage'
                    value={runeTargetTwoPercentage}
                    autoComplete='off'
                    onChange={(e) => setRuneTargetTwoPercentage(e.target.value)}
                    required
                />
                <br/>

                <label>Target Three: </label>
                <input
                    type='text'
                    id='hero_rune_target_3'
                    value={runeTargetThree}
                    autoComplete='off'
                    onChange={(e) => setRuneTargetThree(e.target.value)}
                    required
                />
                <br/>

                <label>Target Three Percentage: </label>
                <input
                    type='number'
                    id='hero_rune_target_3_percentage'
                    value={runeTargetThreePercentage}
                    autoComplete='off'
                    onChange={(e) => setRuneTargetThreePercentage(e.target.value)}
                    required
                />
                <br/>

                <label>Target Four: </label>
                <input
                    type='text'
                    id='hero_rune_target_4'
                    value={runeTargetFour}
                    autoComplete='off'
                    onChange={(e) => setRuneTargetFour(e.target.value)}
                    required
                />
                <br/>

                <label>Target Four Percentage: </label>
                <input
                    type='number'
                    id='hero_rune_target_4_percentage'
                    value={runeTargetFourPercentage}
                    autoComplete='off'
                    onChange={(e) => setRuneTargetFourPercentage(e.target.value)}
                    required
                />
                <br/>

                <label>Target Five: </label>
                <input
                    type='text'
                    id='hero_rune_target_5'
                    value={runeTargetFive}
                    autoComplete='off'
                    onChange={(e) => setRuneTargetFive(e.target.value)}
                    required
                />
                <br/>

                <label>Target Five Percentage: </label>
                <input
                    type='number'
                    id='hero_rune_target_5_percentage'
                    value={runeTargetFivePercentage}
                    autoComplete='off'
                    onChange={(e) => setRuneTargetFivePercentage(e.target.value)}
                    required
                />
                <br/>

                <label>Target Six: </label>
                <input
                    type='text'
                    id='hero_rune_target_6'
                    value={runeTargetSix}
                    autoComplete='off'
                    onChange={(e) => setRuneTargetSix(e.target.value)}
                    required
                />
                <br/>

                <label>Target Six Percentage: </label>
                <input
                    type='number'
                    id='hero_rune_target_6_percentage'
                    value={runeTargetSixPercentage}
                    autoComplete='off'
                    onChange={(e) => setRuneTargetSixPercentage(e.target.value)}
                    required
                />
                <br/>

                <label>Target Seven: </label>
                <input
                    type='text'
                    id='hero_rune_target_7'
                    value={runeTargetSeven}
                    autoComplete='off'
                    onChange={(e) => setRuneTargetSeven(e.target.value)}
                    required
                />
                <br/>

                <label>Target Seven Percentage: </label>
                <input
                    type='number'
                    id='hero_rune_target_7_percentage'
                    value={runeTargetSevenPercentage}
                    autoComplete='off'
                    onChange={(e) => setRuneTargetSevenPercentage(e.target.value)}
                    required
                />
                <br/>

                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default AddRuneTarget