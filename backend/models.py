from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base
from sqlalchemy.orm import relationship

class HeroTable(Base):
    __tablename__='heros'
    id = Column(Integer, primary_key = True, index = True)
    hero_name=Column(String, default='NULL')
    hero_picture=Column(String, default='NULL')
    hero_element=Column(String, default='NULL')
    hero_rarity=Column(String, default='NULL')
    hero_job=Column(String, default='NULL')
    hero_obtain=Column(String, default='NULL')
    hero_description=Column(String, default='NULL')

    hero_base_attack=Column(Integer, default=0)
    hero_base_health=Column(Integer, default=0)
    hero_base_defence=Column(Integer, default=0)
    hero_base_critical_rate=Column(Integer, default=0)
    hero_base_critical_damage=Column(Integer, default=0)
    hero_base_attack_per_second=Column(Integer, default=0)
    hero_base_attack_range=Column(Integer, default=0)
    hero_base_movement_speed=Column(Integer, default=0)
    hero_base_effect_resistence=Column(Integer, default=0)
    hero_base_frenzy_chance=Column(Integer, default=0)
    hero_base_dodge_rate=Column(Integer, default=0)
    hero_base_stun_chance=Column(Integer, default=0)
    hero_base_stun_time=Column(Integer, default=0)
    hero_base_aoe_radius=Column(Integer, default=0)
    hero_base_aoe_damage=Column(Integer, default=0)
    hero_base_ultimate_attack=Column(Integer, default=0)
    hero_base_knight_shield_hp=Column(Integer, default=0)
    hero_base_bonus_gold=Column(Integer, default=0)
    hero_base_freeze_time=Column(Integer, default=0)
    hero_base_freeze_explosion_damage=Column(Integer, default=0)
    hero_base_burn_chance=Column(Integer, default=0)
    hero_base_burn_time=Column(Integer, default=0)
    hero_base_burn_damage=Column(Integer, default=0)
    hero_base_poison_chance=Column(Integer, default=0)
    hero_base_poison_time=Column(Integer, default=0)
    hero_base_poison_damage=Column(Integer, default=0)
    
    hero_base_dps=Column(Integer, default=0)
    
    rune_1=Column(String, default='NULL')
    rune_2=Column(String, default='NULL')
    rune_3=Column(String, default='NULL')
    
    target_rune_stats=Column(String, default='NULL')

class UserTable(Base):
    __tablename__='users'
    userid=Column(Integer, primary_key = True, index = True)
    username=Column(String)
    password=Column(String)