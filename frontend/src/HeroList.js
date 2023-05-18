import React, { useState, useEffect } from 'react'

const HeroList = () => {
    const [heroList, setHeroList] = useState([""]);
    const [selectedHero, setSelectedHero] = useState("");
    const uniqueHero = [...new Set(heroList.map(details => details.hero_name))];

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

    function handleHeroChange(evt) {
        setSelectedHero(evt.target.value);
    }

    return (
        <div>
            <label>
                Hero:
                <select value={selectedHero} onChange={handleHeroChange}>
                    <option key='all' value=''>All</option>
                    {uniqueHero.map((hero, index) => (
                        <option key={index} value={hero}>
                            {hero}
                        </option>
                    ))}
                </select>
            </label>
            <table>
                <thead>
                    <tr>
                        <th>Picture</th>
                        <th>Basics</th>
                        <th>Recommended Runes</th>
                        <th>Rune Stat Targets</th>
                        <th>Details</th>
                    </tr>
                </thead>

                <tbody>
                    {heroList
                        .filter(details => selectedHero == '' || details.hero_name === selectedHero)
                        .map((details, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={`/${details.hero_name}.jpg`} alt={details.hero_name} style={{width: '100px', height: 'auto'}}/>
                                </td>

                                <td>
                                    Name: {details.hero_name}<br/>
                                    Element: {details.hero_element}<br/>
                                    Rarity: {details.hero_rarity}<br/>
                                    Job: {details.hero_job}<br/>
                                </td>

                                <td>
                                    Rune 1: {details.hero_rune_1}<br/>
                                    Rune 2: {details.hero_rune_2}<br/>
                                    Rune 3: {details.hero_rune_3}<br/>
                                </td>

                                <td>
                                    {details.hero_rune_target_1} {details.hero_rune_target_1_percentage}<br/>
                                    {details.hero_rune_target_2} {details.hero_rune_target_2_percentage}<br/>
                                    {details.hero_rune_target_3} {details.hero_rune_target_3_percentage}<br/>
                                    {details.hero_rune_target_4} {details.hero_rune_target_4_percentage}<br/>
                                    {details.hero_rune_target_5} {details.hero_rune_target_5_percentage}<br/>
                                    {details.hero_rune_target_6} {details.hero_rune_target_6_percentage}<br/>
                                    {details.hero_rune_target_7} {details.hero_rune_target_7_percentage}<br/>
                                </td>

                                <td>
                                    {details.hero_info}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default HeroList