import React, { useState, useEffect } from 'react'

const HeroList = () => {
    const [heroList, setHeroList] = useState([""]);
    const [selectedHero, setSelectedHero] = useState([""]);
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
                    <option value=''>All</option>
                    {uniqueHero.map(hero => (
                        <option value={hero}>{hero}</option>
                    ))}
                </select>
            </label>
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Basics</th>
                    <th>Base Stats Page 1</th>
                    <th>Base Stats Page 2</th>
                    <th>Base Stats Page 3</th>
                    <th>Recommended Runes</th>
                    <th>Rune Stat Targets</th>
                </tr>
                {heroList
                    .filter(details => selectedHero == '' || details.hero_name === selectedHero)
                    .map((details, index) => (
                        <tr key={index}>
                            <td>
                                <img src={`/pictures/${details.hero_picture}.jpg`} alt={details.hero_name} style={{width: '100px', height: 'auto'}}/>
                            </td>

                            <td>
                                Name: {details.hero_name}<br/>
                                Element: {details.hero_element}<br/>
                                Rarity: {details.hero_rarity}<br/>
                                Job: {details.hero_job}<br/>
                                How to get: {details.hero_obtain}<br/>
                                Description: {details.hero_description}<br/>
                            </td>

                            <td>
                                Attack: {details.hero_base_attack}<br/>
                                Health: {details.hero_base_health}<br/>
                                Defence: {details.hero_base_defence}<br/>
                                Crit Rate: {details.hero_base_critical_rate}<br/>
                                Crit Damage: {details.hero_base_critical_damage}<br/>
                                Attack Per Second: {details.hero_base_attack_per_second}<br/>
                                Attack Range: {details.hero_base_attack_range}<br/>
                                Move Speed: {details.hero_base_movement_speed}<br/>
                                Resistance: {details.hero_base_effect_resistence}<br/>
                            </td>

                            <td>
                                Frenzy Chance: {details.hero_base_frenzy_chance}<br/>
                                Dodge Rate: {details.hero_base_dodge_rate}<br/>
                                Stun Chance: {details.hero_base_stun_chance}<br/>
                                Stun Time: {details.hero_base_stun_time}<br/>
                                AOE Radius: {details.hero_base_aoe_radius}<br/>
                                AOE Damage: {details.hero_base_aoe_damage}<br/>
                                Ult Attack: {details.hero_base_ultimate_attack}<br/>
                                Shield HP: {details.hero_base_knight_shield_hp}<br/>
                                Bonus Gold: {details.hero_base_bonus_gold}<br/>
                            </td>

                            <td>
                                Freeze Time: {details.hero_base_freeze_time}<br/>
                                Freeze Explosion: {details.hero_base_freeze_explosion_damage}<br/>
                                Burn Chance: {details.hero_base_burn_chance}<br/>
                                Burn Time: {details.hero_base_burn_time}<br/>
                                Burn Damage: {details.hero_base_burn_damage}<br/>
                                Poison Chance: {details.hero_base_poison_chance}<br/>
                                Poison Time: {details.hero_base_poison_time}<br/>
                                Poison Damage: {details.hero_base_poison_damage}<br/>
                                Damage Per Second: {details.hero_base_dps}<br/>
                            </td>

                            <td>
                                Rune 1: {details.rune_1}<br/>
                                Rune 2: {details.rune_2}<br/>
                                Rune 3: {details.rune_3}<br/>
                            </td>

                            <td>
                                {details.target_rune_stats}
                            </td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}

export default HeroList