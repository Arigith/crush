import React, { useState } from 'react'

const BaseStats = () => {
    const hero_name = 'Lukas'

    const [attack, setAttack] = useState([''])
    const [health, setHealth] = useState([''])
    const [defence, setDefence] = useState([''])
    const [critRate, setCritRate] = useState([''])
    const [critDamage, setCritDamage] = useState([''])
    const [attackPerSecond, setAttackPerSecond] = useState([''])
    const [attackRange, setAttackRange] = useState([''])
    const [moveSpeed, setMoveSpeed] = useState([''])
    const [resistance, setResistance] = useState([''])
    const [frenzyChance, setFrenzyChance] = useState([''])
    const [dodgeRate, setDodgeRate] = useState([''])
    const [stunChance, setStunChance] = useState([''])
    const [stunTime, setStunTime] = useState([''])
    const [aoeRadius, setAoeRadius] = useState([''])
    const [aoeDamage, setAoeDamage] = useState([''])
    const [ultAttack, setUltAttack] = useState([''])
    const [shieldHP, setShieldHP] = useState([''])
    const [bonusGold, setBonusGold] = useState([''])
    const [freezeTime, setFreezeTime] = useState([''])
    const [freezeExplosion, setFreezeExplosion] = useState([''])
    const [burnChance, setBurnChance] = useState([''])
    const [burnTime, setBurnTime] = useState([''])
    const [burnDamage, setBurnDamage] = useState([''])
    const [poisonChance, setPoisonChance] = useState([''])
    const [poisonTime, setPoisonTime] = useState([''])
    const [poisonDamage, setPoisonDamage] = useState([''])
    // const [damagePerSecond, setDamagePerSecond] = useState([''])

    function handleChange(evt) {
        evt.preventDefault();

        fetch(`http://127.0.0.1:8000/hero/updatebasestats/${hero_name}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                'hero_base_attack': attack,
                'hero_base_health': health,
                'hero_base_defence': defence,
                'hero_base_critical_rate': critRate,
                'hero_base_critical_damage': critDamage,
                'hero_base_attack_per_second': attackPerSecond,
                'hero_base_attack_range': attackRange,
                'hero_base_movement_speed': moveSpeed,
                'hero_base_effect_resistence': resistance,
                'hero_base_frenzy_chance': frenzyChance,
                'hero_base_dodge_rate': dodgeRate,
                'hero_base_stun_chance': stunChance,
                'hero_base_stun_time': stunTime,
                'hero_base_aoe_radius': aoeRadius,
                'hero_base_aoe_damage': aoeDamage,
                'hero_base_ultimate_attack': ultAttack,
                'hero_base_knight_shield_hp': shieldHP,
                'hero_base_bonus_gold': bonusGold,
                'hero_base_freeze_time': freezeTime,
                'hero_base_freeze_explosion_damage': freezeExplosion,
                'hero_base_burn_chance': burnChance,
                'hero_base_burn_time': burnTime,
                'hero_base_burn_damage': burnDamage,
                'hero_base_poison_chance': poisonChance,
                'hero_base_poison_time': poisonTime,
                'hero_base_poison_damage': poisonDamage,
            })
        })

        .then(resp => resp.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })

    }

    return (
        <div>
            <form onSubmit={handleChange}>
                <label>Base Attack: </label>
                <input
                    type='number'
                    id='hero_base_attack'
                    value={attack}
                    autoComplete='off'
                    onChange={(e) => setAttack(e.target.value)}
                    required
                />
                <br/>

                <label>Base Health: </label>
                <input
                    type='number'
                    id='hero_base_health'
                    value={health}
                    autoComplete='off'
                    onChange={(e) => setHealth(e.target.value)}
                    required
                />
                <br/>

                <label>Base Defence: </label>
                <input
                    type='number'
                    id='hero_base_defence'
                    value={defence}
                    autoComplete='off'
                    onChange={(e) => setDefence(e.target.value)}
                    required
                />
                <br/>

                <label>Base Crit Rate: </label>
                <input
                    type='number'
                    id='hero_base_critical_rate'
                    value={critRate}
                    autoComplete='off'
                    onChange={(e) => setCritRate(e.target.value)}
                    required
                />
                <br/>

                <label>Base Critical Damage: </label>
                <input
                    type='number'
                    id='hero_base_critical_damage'
                    value={critDamage}
                    autoComplete='off'
                    onChange={(e) => setCritDamage(e.target.value)}
                    required
                />
                <br/>

                <label>Base Attack Per Second: </label>
                <input
                    type='number'
                    id='hero_base_attack_per_second'
                    value={attackPerSecond}
                    autoComplete='off'
                    onChange={(e) => setAttackPerSecond(e.target.value)}
                    required
                />
                <br/>

                <label>Base Attack Range: </label>
                <input
                    type='number'
                    id='hero_base_attack_range'
                    value={attackRange}
                    autoComplete='off'
                    onChange={(e) => setAttackRange(e.target.value)}
                    required
                />
                <br/>

                <label>Base Movement Speed: </label>
                <input
                    type='number'
                    id='hero_base_movement_speed'
                    value={moveSpeed}
                    autoComplete='off'
                    onChange={(e) => setMoveSpeed(e.target.value)}
                    required
                />
                <br/>

                <label>Base Resistence: </label>
                <input
                    type='number'
                    id='hero_base_effect_resistence'
                    value={resistance}
                    autoComplete='off'
                    onChange={(e) => setResistance(e.target.value)}
                    required
                />
                <br/>

                <label>Base Frenzy Chance: </label>
                <input
                    type='number'
                    id='hero_base_frenzy_chance'
                    value={frenzyChance}
                    autoComplete='off'
                    onChange={(e) => setFrenzyChance(e.target.value)}
                    required
                />
                <br/>

                <label>Base Dodge Rate: </label>
                <input
                    type='number'
                    id='hero_base_dodge_rate'
                    value={dodgeRate}
                    autoComplete='off'
                    onChange={(e) => setDodgeRate(e.target.value)}
                    required
                />
                <br/>

                <label>Base Stun Chance: </label>
                <input
                    type='number'
                    id='hero_base_stun_chance'
                    value={stunChance}
                    autoComplete='off'
                    onChange={(e) => setStunChance(e.target.value)}
                    required
                />
                <br/>

                <label>Base Stun Time: </label>
                <input
                    type='number'
                    id='hero_base_stun_time'
                    value={stunTime}
                    autoComplete='off'
                    onChange={(e) => setStunTime(e.target.value)}
                    required
                />
                <br/>

                <label>Base AOE Radius: </label>
                <input
                    type='number'
                    id='hero_base_aoe_radius'
                    value={aoeRadius}
                    autoComplete='off'
                    onChange={(e) => setAoeRadius(e.target.value)}
                    required
                />
                <br/>

                <label>Base AOE Damage: </label>
                <input
                    type='number'
                    id='hero_base_aoe_damage'
                    value={aoeDamage}
                    autoComplete='off'
                    onChange={(e) => setAoeDamage(e.target.value)}
                    required
                />
                <br/>

                <label>Base Ultimate Attack: </label>
                <input
                    type='number'
                    id='hero_base_ultimate_attack'
                    value={ultAttack}
                    autoComplete='off'
                    onChange={(e) => setUltAttack(e.target.value)}
                    required
                />
                <br/>

                <label>Base Knight Shield HP: </label>
                <input
                    type='number'
                    id='hero_base_knight_shield_hp'
                    value={shieldHP}
                    autoComplete='off'
                    onChange={(e) => setShieldHP(e.target.value)}
                    required
                />
                <br/>

                <label>Base Bonus Gold: </label>
                <input
                    type='number'
                    id='hero_base_bonus_gold'
                    value={bonusGold}
                    autoComplete='off'
                    onChange={(e) => setBonusGold(e.target.value)}
                    required
                />
                <br/>

                <label>Base Freeze Time: </label>
                <input
                    type='number'
                    id='hero_base_freeze_time'
                    value={freezeTime}
                    autoComplete='off'
                    onChange={(e) => setFreezeTime(e.target.value)}
                    required
                />
                <br/>

                <label>Base Freeze Explosion Damage: </label>
                <input
                    type='number'
                    id='hero_base_freeze_explosion_damage'
                    value={freezeExplosion}
                    autoComplete='off'
                    onChange={(e) => setFreezeExplosion(e.target.value)}
                    required
                />
                <br/>

                <label>Base Burn Chance: </label>
                <input
                    type='number'
                    id='hero_base_burn_chance'
                    value={burnChance}
                    autoComplete='off'
                    onChange={(e) => setBurnChance(e.target.value)}
                    required
                />
                <br/>

                <label>Base Burn Time: </label>
                <input
                    type='number'
                    id='hero_base_burn_time'
                    value={burnTime}
                    autoComplete='off'
                    onChange={(e) => setBurnTime(e.target.value)}
                    required
                />
                <br/>

                <label>Base Burn Damage: </label>
                <input
                    type='number'
                    id='hero_base_burn_damage'
                    value={burnDamage}
                    autoComplete='off'
                    onChange={(e) => setBurnDamage(e.target.value)}
                    required
                />
                <br/>

                <label>Base Poison Chance: </label>
                <input
                    type='number'
                    id='hero_base_poison_chance'
                    value={poisonChance}
                    autoComplete='off'
                    onChange={(e) => setPoisonChance(e.target.value)}
                    required
                />
                <br/>

                <label>Base Poison Time: </label>
                <input
                    type='number'
                    id='hero_base_poison_time'
                    value={poisonTime}
                    autoComplete='off'
                    onChange={(e) => setPoisonTime(e.target.value)}
                    required
                />
                <br/>

                <label>Base Poison Damage: </label>
                <input
                    type='number'
                    id='hero_base_poison_damage'
                    value={poisonDamage}
                    autoComplete='off'
                    onChange={(e) => setPoisonDamage(e.target.value)}
                    required
                />
                <br/>

                {/* <label>Base DPS: </label>
                <input
                    type='number'
                    id='hero_base_dps'
                    value={userRef}
                    autoComplete='off'
                    onChange={(e) => setDamagePerSecond(e.target.value)}
                    required
                />
                <br/> */}

                <button type='submit'>Update</button>
            </form>
        </div>
    )
}

export default BaseStats