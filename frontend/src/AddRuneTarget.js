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

    const handleTargetOneChange = (evt) => {
        setRuneTargetOne(evt.target.value);
    };
    
    const handleTargetTwoChange = (evt) => {
        setRuneTargetTwo(evt.target.value);
    };
    
    const handleTargetThreeChange = (evt) => {
        setRuneTargetThree(evt.target.value);
    };
    
    const handleTargetFourChange = (evt) => {
        setRuneTargetFour(evt.target.value);
    };
    
    const handleTargetFiveChange = (evt) => {
        setRuneTargetFive(evt.target.value);
    };
    
    const handleTargetSixChange = (evt) => {
        setRuneTargetSix(evt.target.value);
    };
    
    const handleTargetSevenChange = (evt) => {
        setRuneTargetSeven(evt.target.value);
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
                <select value={runeTargetOne} onChange={handleTargetOneChange}>
                    <option value=''>Set Rune Target One</option>
                    <option value='AoE Damage'>AoE Damage</option>
                    <option value='AoE Radius'>AoE Radius</option>
                    <option value='ATK'>ATK</option>
                    <option value='Atk per sec'>Atk per sec</option>
                    <option value='Atk Range'>Atk Range</option>
                    <option value='Bonus Gold'>Bonus Gold</option>
                    <option value='Burn Chance'>Burn Chance</option>
                    <option value='Burn Dmg'>Burn Dmg</option>
                    <option value='Burn Time'>Burn Time</option>
                    <option value='Critical Damage'>Critical Damage</option>
                    <option value='Critical Rate'>Critical Rate</option>
                    <option value='Def'>Def</option>
                    <option value='Dodge Rate'>Dodge Rate</option>
                    <option value='Effect Resistance'>Effect Resistance</option>
                    <option value='Freeze Chance'>Freeze Chance</option>
                    <option value='Freeze Ezplosion Dmg'>Freeze Ezplosion Dmg</option>
                    <option value='Freeze Time'>Freeze Time</option>
                    <option value='Frenzy Chance'>Frenzy Chance</option>
                    <option value='HP'>HP</option>
                    <option value='Knight Shield HP'>Knight Shield HP</option>
                    <option value='Move Speed'>Move Speed</option>
                    <option value='Poison Chance'>Poison Chance</option>
                    <option value='Poison Dmg'>Poison Dmg</option>
                    <option value='Poison Time'>Poison Time</option>
                    <option value='Stun Chance'>Stun Chance</option>
                    <option value='Stun Time'>Stun Time</option>
                    <option value='Ultimate Atk'>Ultimate Atk</option>
                </select>
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
                <select value={runeTargetTwo} onChange={handleTargetTwoChange}>
                    <option value=''>Set Rune Target Two</option>
                    <option value='AoE Damage'>AoE Damage</option>
                    <option value='AoE Radius'>AoE Radius</option>
                    <option value='ATK'>ATK</option>
                    <option value='Atk per sec'>Atk per sec</option>
                    <option value='Atk Range'>Atk Range</option>
                    <option value='Bonus Gold'>Bonus Gold</option>
                    <option value='Burn Chance'>Burn Chance</option>
                    <option value='Burn Dmg'>Burn Dmg</option>
                    <option value='Burn Time'>Burn Time</option>
                    <option value='Critical Damage'>Critical Damage</option>
                    <option value='Critical Rate'>Critical Rate</option>
                    <option value='Def'>Def</option>
                    <option value='Dodge Rate'>Dodge Rate</option>
                    <option value='Effect Resistance'>Effect Resistance</option>
                    <option value='Freeze Chance'>Freeze Chance</option>
                    <option value='Freeze Ezplosion Dmg'>Freeze Ezplosion Dmg</option>
                    <option value='Freeze Time'>Freeze Time</option>
                    <option value='Frenzy Chance'>Frenzy Chance</option>
                    <option value='HP'>HP</option>
                    <option value='Knight Shield HP'>Knight Shield HP</option>
                    <option value='Move Speed'>Move Speed</option>
                    <option value='Poison Chance'>Poison Chance</option>
                    <option value='Poison Dmg'>Poison Dmg</option>
                    <option value='Poison Time'>Poison Time</option>
                    <option value='Stun Chance'>Stun Chance</option>
                    <option value='Stun Time'>Stun Time</option>
                    <option value='Ultimate Atk'>Ultimate Atk</option>
                </select>
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
                <select value={runeTargetThree} onChange={handleTargetThreeChange}>
                    <option value=''>Set Rune Target Three</option>
                    <option value='AoE Damage'>AoE Damage</option>
                    <option value='AoE Radius'>AoE Radius</option>
                    <option value='ATK'>ATK</option>
                    <option value='Atk per sec'>Atk per sec</option>
                    <option value='Atk Range'>Atk Range</option>
                    <option value='Bonus Gold'>Bonus Gold</option>
                    <option value='Burn Chance'>Burn Chance</option>
                    <option value='Burn Dmg'>Burn Dmg</option>
                    <option value='Burn Time'>Burn Time</option>
                    <option value='Critical Damage'>Critical Damage</option>
                    <option value='Critical Rate'>Critical Rate</option>
                    <option value='Def'>Def</option>
                    <option value='Dodge Rate'>Dodge Rate</option>
                    <option value='Effect Resistance'>Effect Resistance</option>
                    <option value='Freeze Chance'>Freeze Chance</option>
                    <option value='Freeze Ezplosion Dmg'>Freeze Ezplosion Dmg</option>
                    <option value='Freeze Time'>Freeze Time</option>
                    <option value='Frenzy Chance'>Frenzy Chance</option>
                    <option value='HP'>HP</option>
                    <option value='Knight Shield HP'>Knight Shield HP</option>
                    <option value='Move Speed'>Move Speed</option>
                    <option value='Poison Chance'>Poison Chance</option>
                    <option value='Poison Dmg'>Poison Dmg</option>
                    <option value='Poison Time'>Poison Time</option>
                    <option value='Stun Chance'>Stun Chance</option>
                    <option value='Stun Time'>Stun Time</option>
                    <option value='Ultimate Atk'>Ultimate Atk</option>
                </select>
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
                <select value={runeTargetFour} onChange={handleTargetFourChange}>
                    <option value=''>Set Rune Target Four</option>
                    <option value='AoE Damage'>AoE Damage</option>
                    <option value='AoE Radius'>AoE Radius</option>
                    <option value='ATK'>ATK</option>
                    <option value='Atk per sec'>Atk per sec</option>
                    <option value='Atk Range'>Atk Range</option>
                    <option value='Bonus Gold'>Bonus Gold</option>
                    <option value='Burn Chance'>Burn Chance</option>
                    <option value='Burn Dmg'>Burn Dmg</option>
                    <option value='Burn Time'>Burn Time</option>
                    <option value='Critical Damage'>Critical Damage</option>
                    <option value='Critical Rate'>Critical Rate</option>
                    <option value='Def'>Def</option>
                    <option value='Dodge Rate'>Dodge Rate</option>
                    <option value='Effect Resistance'>Effect Resistance</option>
                    <option value='Freeze Chance'>Freeze Chance</option>
                    <option value='Freeze Ezplosion Dmg'>Freeze Ezplosion Dmg</option>
                    <option value='Freeze Time'>Freeze Time</option>
                    <option value='Frenzy Chance'>Frenzy Chance</option>
                    <option value='HP'>HP</option>
                    <option value='Knight Shield HP'>Knight Shield HP</option>
                    <option value='Move Speed'>Move Speed</option>
                    <option value='Poison Chance'>Poison Chance</option>
                    <option value='Poison Dmg'>Poison Dmg</option>
                    <option value='Poison Time'>Poison Time</option>
                    <option value='Stun Chance'>Stun Chance</option>
                    <option value='Stun Time'>Stun Time</option>
                    <option value='Ultimate Atk'>Ultimate Atk</option>
                </select>
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
                <select value={runeTargetFive} onChange={handleTargetFiveChange}>
                <option value='AoE Damage'>AoE Damage</option>
                    <option value='AoE Radius'>AoE Radius</option>
                    <option value='ATK'>ATK</option>
                    <option value='Atk per sec'>Atk per sec</option>
                    <option value='Atk Range'>Atk Range</option>
                    <option value='Bonus Gold'>Bonus Gold</option>
                    <option value='Burn Chance'>Burn Chance</option>
                    <option value='Burn Dmg'>Burn Dmg</option>
                    <option value='Burn Time'>Burn Time</option>
                    <option value='Critical Damage'>Critical Damage</option>
                    <option value='Critical Rate'>Critical Rate</option>
                    <option value='Def'>Def</option>
                    <option value='Dodge Rate'>Dodge Rate</option>
                    <option value='Effect Resistance'>Effect Resistance</option>
                    <option value='Freeze Chance'>Freeze Chance</option>
                    <option value='Freeze Ezplosion Dmg'>Freeze Ezplosion Dmg</option>
                    <option value='Freeze Time'>Freeze Time</option>
                    <option value='Frenzy Chance'>Frenzy Chance</option>
                    <option value='HP'>HP</option>
                    <option value='Knight Shield HP'>Knight Shield HP</option>
                    <option value='Move Speed'>Move Speed</option>
                    <option value='Poison Chance'>Poison Chance</option>
                    <option value='Poison Dmg'>Poison Dmg</option>
                    <option value='Poison Time'>Poison Time</option>
                    <option value='Stun Chance'>Stun Chance</option>
                    <option value='Stun Time'>Stun Time</option>
                    <option value='Ultimate Atk'>Ultimate Atk</option>
                </select>
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
                <select value={runeTargetSix} onChange={handleTargetSixChange}>
                    <option value=''>Set Rune Target Six</option>
                    <option value='AoE Damage'>AoE Damage</option>
                    <option value='AoE Radius'>AoE Radius</option>
                    <option value='ATK'>ATK</option>
                    <option value='Atk per sec'>Atk per sec</option>
                    <option value='Atk Range'>Atk Range</option>
                    <option value='Bonus Gold'>Bonus Gold</option>
                    <option value='Burn Chance'>Burn Chance</option>
                    <option value='Burn Dmg'>Burn Dmg</option>
                    <option value='Burn Time'>Burn Time</option>
                    <option value='Critical Damage'>Critical Damage</option>
                    <option value='Critical Rate'>Critical Rate</option>
                    <option value='Def'>Def</option>
                    <option value='Dodge Rate'>Dodge Rate</option>
                    <option value='Effect Resistance'>Effect Resistance</option>
                    <option value='Freeze Chance'>Freeze Chance</option>
                    <option value='Freeze Ezplosion Dmg'>Freeze Ezplosion Dmg</option>
                    <option value='Freeze Time'>Freeze Time</option>
                    <option value='Frenzy Chance'>Frenzy Chance</option>
                    <option value='HP'>HP</option>
                    <option value='Knight Shield HP'>Knight Shield HP</option>
                    <option value='Move Speed'>Move Speed</option>
                    <option value='Poison Chance'>Poison Chance</option>
                    <option value='Poison Dmg'>Poison Dmg</option>
                    <option value='Poison Time'>Poison Time</option>
                    <option value='Stun Chance'>Stun Chance</option>
                    <option value='Stun Time'>Stun Time</option>
                    <option value='Ultimate Atk'>Ultimate Atk</option>
                </select>
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
                <select value={runeTargetSeven} onChange={handleTargetSevenChange}>
                    <option value=''>Set Rune Target Seven</option>
                    <option value='AoE Damage'>AoE Damage</option>
                    <option value='AoE Radius'>AoE Radius</option>
                    <option value='ATK'>ATK</option>
                    <option value='Atk per sec'>Atk per sec</option>
                    <option value='Atk Range'>Atk Range</option>
                    <option value='Bonus Gold'>Bonus Gold</option>
                    <option value='Burn Chance'>Burn Chance</option>
                    <option value='Burn Dmg'>Burn Dmg</option>
                    <option value='Burn Time'>Burn Time</option>
                    <option value='Critical Damage'>Critical Damage</option>
                    <option value='Critical Rate'>Critical Rate</option>
                    <option value='Def'>Def</option>
                    <option value='Dodge Rate'>Dodge Rate</option>
                    <option value='Effect Resistance'>Effect Resistance</option>
                    <option value='Freeze Chance'>Freeze Chance</option>
                    <option value='Freeze Ezplosion Dmg'>Freeze Ezplosion Dmg</option>
                    <option value='Freeze Time'>Freeze Time</option>
                    <option value='Frenzy Chance'>Frenzy Chance</option>
                    <option value='HP'>HP</option>
                    <option value='Knight Shield HP'>Knight Shield HP</option>
                    <option value='Move Speed'>Move Speed</option>
                    <option value='Poison Chance'>Poison Chance</option>
                    <option value='Poison Dmg'>Poison Dmg</option>
                    <option value='Poison Time'>Poison Time</option>
                    <option value='Stun Chance'>Stun Chance</option>
                    <option value='Stun Time'>Stun Time</option>
                    <option value='Ultimate Atk'>Ultimate Atk</option>
                </select>
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
                <br/>
                <br/>

                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default AddRuneTarget