from pydantic import BaseModel
from passlib.context import CryptContext

pwd_ctxt=CryptContext(schemes=['bcrypt'], deprecated='auto')

class Hash():
    def bcrypt(password:str):
        return pwd_ctxt.hash(password)
    
    def verify(plain_password, hashed_password):
        return pwd_ctxt.verify(plain_password, hashed_password)

class HeroBase(BaseModel):
    hero_name:str
    hero_picture:str
    hero_element:str
    hero_rarity:str
    hero_job:str
    hero_obtain:str
    hero_description:str

class HeroBases(HeroBase):
    class Config():
        orm_mode=True

class BaseStats(BaseModel):
    hero_base_attack:int
    hero_base_health:int
    hero_base_defence:int
    hero_base_critical_rate:int
    hero_base_critical_damage:int
    hero_base_attack_per_second:int
    hero_base_attack_range:int
    hero_base_movement_speed:int
    hero_base_effect_resistence:int
    hero_base_frenzy_chance:int
    hero_base_dodge_rate:int
    hero_base_stun_chance:int
    hero_base_stun_time:int
    hero_base_aoe_radius:int
    hero_base_aoe_damage:int
    hero_base_ultimate_attack:int
    hero_base_knight_shield_hp:int
    hero_base_bonus_gold:int
    hero_base_freeze_time:int
    hero_base_freeze_explosion_damage:int
    hero_base_burn_chance:int
    hero_base_burn_time:int
    hero_base_burn_damage:int
    hero_base_poison_chance:int
    hero_base_poison_time:int
    hero_base_poison_damage:int

class BaseStatisics(BaseStats):
    class Config():
        orm_mode=True

class BaseRune(BaseModel):
    rune_1:str
    rune_2:str
    rune_3:str
    target_rune_stats:str

class BaseRunes(BaseRune):
    class Config():
        orm_mode=True

class AllHero(BaseRune, BaseStats, HeroBase):
    class Config():
        orm_mode=True
        
class Userdetails(BaseModel):
    username:str
    password:str

class UserCommit(Userdetails):
    class Config():
        orm_mode=True

class Login(BaseModel):
    username:str
    password:str

class Token(BaseModel):
    access_token:str
    token_type:str

class TokenData(BaseModel):
    username:str | None = None